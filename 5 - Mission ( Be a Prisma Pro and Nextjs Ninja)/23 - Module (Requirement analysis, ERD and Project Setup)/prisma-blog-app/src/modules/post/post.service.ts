
import { PostWhereInput, Result } from './../../../generated/prisma/internal/prismaNamespace';
import { CommentStatus, Post, PostStatus } from "../../../generated/prisma/client";
import { prisma } from "../../lib/prisma";
import { title } from 'node:process';
import { tuple } from 'better-auth/*';

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
    skip: number
    sortBy: string
    sortOrder: string
}) => {
    const { search, tags, isFeatured, status, authorId, page, limit, skip, sortBy, sortOrder } = payload
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

    if (typeof isFeatured === 'boolean') {
        andConditions.push({
            isFeatured
        })
    }

    if (status) {
        andConditions.push({
            status
        })
    }

    if (authorId) {
        andConditions.push({
            authorId
        })
    }



    const result = await prisma.post.findMany({
        take: limit,
        skip: skip,
        where: {
            AND: andConditions
        },
        orderBy: {
            [sortBy]: sortOrder
        },
        include: {
            _count: {
                select: {
                    comment: true
                }
            }
        }

    })

    const total = await prisma.post.count({
        where: {
            AND: andConditions
        }
    })

    return {
        data: result,
        pagination: {
            total,
            page,
            limit,
            totalPages: Math.ceil(total / limit)
        }
    };
}

const getPostById = async (postId: string) => {

    return await prisma.$transaction(async (tx) => {

        const post = await tx.post.findUnique({
            where: {
                id: postId
            }
        })
        if (!post) {
            throw new Error('Post not found!')
        }

        await tx.post.update({
            where: {
                id: postId
            },
            data: {
                views: {
                    increment: 1
                }
            }
        })

        return await tx.post.findUnique({
            where: {
                id: postId
            },
            include: {
                comment: {
                    where: {
                        parentId: null,
                        status: CommentStatus.APPROVED
                    },
                    orderBy: {
                        createdAt: 'desc'
                    },
                    include: {
                        replies: {
                            where: {
                                status: CommentStatus.APPROVED
                            },
                            orderBy: {
                                createdAt: 'desc'
                            },
                            include: {
                                replies: {
                                    where: {
                                        status: CommentStatus.APPROVED
                                    },
                                    orderBy: {
                                        createdAt: 'desc'
                                    },
                                }
                            }
                        }
                    }
                },
                _count: {
                    select: {
                        comment: true
                    }
                }
            }
        })
    })

}


const getMyPost = async (userId: string) => {

    const userInfo = await prisma.user.findUniqueOrThrow({
        where: {
            id: userId,
            status: "ACTIVE"
        },
        select: {
            id: true,
            status: true
        }
    })

    const result = await prisma.post.findMany({
        where: {
            authorId: userId,
        },
        orderBy: {
            createdAt: "desc",
        },
        include: {
            _count: {
                select: {
                    comment: true
                }
            }
        }
    });
    // const totalPost = await prisma.post.aggregate({
    //     _count: {
    //         id: true
    //     }, 
    //     where: {
    //         authorId: userId,
    //     }
    // })
    return result
};

const updatePost = async (postId: string, data: Partial<Post>, authorId: string, isAdmin: boolean) => {
    const postData = await prisma.post.findUniqueOrThrow({
        where: {
            id: postId
        },
        select: {
            id: true,
            authorId: true
        }
    })

    if ((postData.authorId !== authorId) && !isAdmin) {
        throw new Error("You are not author/creator of it")
    }

    if (!isAdmin) {
        delete data.isFeatured
    }

    return await prisma.post.update({
        where: {
            id: postId
        },
        data
    })
}

const deletePost = async (postId: string, authorId: string, isAdmin: boolean) => {
    const postData = await prisma.post.findUniqueOrThrow({
        where: {
            id: postId
        },
        select: {
            id: true,
            authorId: true
        }
    })

    if ((postData.authorId !== authorId) && !isAdmin){
        throw new Error("You are not creator of it!")
    }

    return await prisma.post.delete({
        where: {
            id: postId
        }
    })

}

export const postService = {
    createPost,
    getAllPost,
    getPostById,
    getMyPost,
    updatePost,
    deletePost
}