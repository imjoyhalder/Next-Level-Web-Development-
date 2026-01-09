import { tuple } from "better-auth/*"
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

export const commentService = {
    createComment,
    getCommentById,
    getCommentByAuthor
}