import { CommentStatus } from './../../../generated/prisma/enums';
import { prisma } from "../../lib/prisma"


const createComment = async (payload:
    {
        content: string
        authorId: string
        postId: string
        parentId?: string
    }) => {

    const postData = await prisma.post.findUniqueOrThrow({
        where: {
            id: payload.postId
        }
    })

    const parentId = await prisma.comment.findFirstOrThrow({
        where: {
            id: payload?.parentId as string
        }
    })

    return await prisma.comment.create({
        data: payload
    })
}

const getCommentById = async (commentId: string) => {
    return await prisma.comment.findUnique({
        where: {
            id: commentId
        },
        include: {
            post: {
                select: {
                    id: true,
                    title: true,
                    views: true
                }
            }
        }
    })

}

const getCommentByAuthor = async (authorId: string) => {
    return await prisma.comment.findMany({
        where: {
            authorId: authorId
        },
        orderBy: {
            createdAt: 'desc'
        },
        include: {
            post: {
                select: {
                    id: true,
                    title: true,
                }
            }
        }
    })
}

const deleteComment = async (commentId: string, userId: string) => {

    const commentData = await prisma.comment.findFirst({
        where: {
            authorId: userId,
            id: commentId
        },
        select: {
            id: true
        }
    })

    if (!commentData) {
        throw new Error("Your provided input invalid")
    }

    return await prisma.comment.delete({
        where: {
            id: commentData?.id
        },
    })
}


const updateComment = async (commentId: string, updatedData: {content?: string, status?: CommentStatus}, userId: string) => {

    const commentData = await prisma.comment.findUnique({
        where: {
            id: commentId,
            authorId: userId
        },
        select: {
            id: true
        }
    })
    if (!commentData) {
        throw new Error('Invalid input provided!!')
    } 
    return await prisma.comment.update({
        where:{
            id: commentId
        }, 
        data: {
            content: updatedData?.content as string, 
            status: updatedData?.status as CommentStatus
        }
    })
}


export const commentService = {
    createComment,
    getCommentById,
    getCommentByAuthor,
    deleteComment,
    updateComment
}