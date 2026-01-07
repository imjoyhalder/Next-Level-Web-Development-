import { PostWhereInput, Result } from './../../../generated/prisma/internal/prismaNamespace';
import { Post, PostStatus } from "../../../generated/prisma/client";
import { prisma } from "../../lib/prisma";

const createPost = async (data: Omit<Post, 'id' | 'createdAt' | 'updatedAt' | 'authorId'>, userId: string) => {
    const result = await prisma.post.create(
        {
            data: {
                ...data,
                authorId: userId
            }
        }
    )
    return result;
}

const getAllPost = async (payload: {
    search: string | undefined
    tags: string[] | []
    isFeatured: boolean | undefined
    status: PostStatus | undefined
    authorId: string | undefined
    page: number
    limit: number
}) => {
    const { search, tags, isFeatured, status, authorId, page, limit } = payload
    const andConditions: PostWhereInput[] = []

    if (search) {
        andConditions.push({
            OR: [
                {
                    title: {
                        contains: payload.search as string,
                        mode: "insensitive"
                    }
                },
                {
                    content: {
                        contains: payload.search as string,
                        mode: "insensitive",
                    }
                },
                {
                    tags: {
                        has: payload.search as string,

                    }
                }
            ]
        })
    }

    if (tags.length > 0) {
        andConditions.push({
            tags: {
                hasEvery: payload.tags as string[]
            }
        })
    }

    if(typeof isFeatured === 'boolean'){
        andConditions.push({
            isFeatured
        })
    }

    if(status){
        andConditions.push({
            status
        })
    }
    
    if(authorId){
        andConditions.push({
            authorId
        })
    }
    console.log({});

    const result = await prisma.post.findMany({
        where: {
            AND: andConditions
        }
    })
    console.log({page,limit});
    return result;
}

export const postService = {
    createPost,
    getAllPost
}