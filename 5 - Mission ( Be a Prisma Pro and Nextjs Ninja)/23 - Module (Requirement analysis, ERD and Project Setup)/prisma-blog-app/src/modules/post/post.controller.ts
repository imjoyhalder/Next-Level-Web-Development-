
import { Request, Response } from "express"
import { postService } from "./post.service";
import { Post, PostStatus } from "../../../generated/prisma/client";
import { paginationSortingHelper } from '../../helpers/paginationSortingHelper';



const createPost = async (req: Request, res: Response) => {
    try {

        if (!req?.user) {
            return res.status(400).json({
                error: 'Unauthorized!'
            })
        }

        const result = await postService.createPost(req.body, req.user?.id as string)
        res.status(201).json(result)

    } catch (error: any) {
        res.status(400).json({
            error: "Post creation failed",
            details: error
        })
    }
}

const getAllPost = async (req: Request, res: Response) => {
    try {
        const { search } = req.query;
        const searchString = typeof search === "string" ? search : undefined

        const tags = req.query.tags ? (req.query.tags as string).split(',') : []

        const isFeatured = req.query.isFeatured
            ? req.query.isFeatured === "true"
                ? true
                : req.query.isFeatured === "false"
                    ? false
                    : undefined
            : undefined

        // get status form query
        const status = req.query.status as PostStatus | undefined

        // authorId get form query
        const authorId = req.query.authorId as string | undefined

        const { page, limit, skip, sortBy, sortOrder } = paginationSortingHelper(req.query)

        const result = await postService.getAllPost({ search: searchString, tags, isFeatured, status, authorId, page, limit, skip, sortBy, sortOrder });
        res.status(200).send(result)
    } catch (error: any) {
        res.status(400).json({
            error: "Post creation failed.",
            details: error
        })
    }
}

const getPostById = async (req: Request, res: Response) => {
    try {
        const { postId } = req.params
        if (!postId) {
            throw new Error("Post id is required!")
        }
        const result = await postService.getPostById(postId as string)
        res.status(200).json(result)

    } catch (error) {
        res.status(400).json({
            error: "Post fetched failed.",
            details: error
        })
    }
}

const getMyPost = async (req: Request, res: Response) => {
    try {
        const user = req.user;
        if (!user) {
            return res.status(401).json({
                success: false,
                message: "You are Unauthorized !!",
            });
        }

        const result = await postService.getMyPost(user.id as string);

        return res.status(200).json({
            success: true,
            data: result,
        });

    } catch (error) {
        const errorMessage =
            error instanceof Error ? error.message : "Post fetch failed"
        return res.status(400).json({
            success: false,
            error: errorMessage,
        });
    }
};


const updatePost = async (req: Request, res: Response) => {
    try {

        const user = req.user;
        if (!user) {
            return res.status(401).json({
                success: false,
                message: "You are Unauthorized !!",
            });
        }

        const isAdmin = user.role === "ADMIN"
        const { postId } = req.params
        const data = req.body

        const result = await postService.updatePost(postId as string, data, user?.id as string, isAdmin as boolean)
        res.status(200).json(result)

    } catch (error) {
        const errorMessage =
            error instanceof Error ? error.message : "Post update failed"
        return res.status(400).json({
            success: false,
            error: errorMessage,
        });
    }
}

const deletePost = async (req: Request, res: Response) => {
    try {
        const user = req.user;
        if (!user) {
            return res.status(401).json({
                success: false,
                message: "You are Unauthorized !!",
            });
        }
        const isAdmin = user.role === "ADMIN"
        const { postId } = req.params

        const result = await postService.deletePost(postId as string, user.id, isAdmin as boolean)
        res.status(200).json(result)
    } catch (error) {
        const errorMessage =
            error instanceof Error ? error.message : "Post update failed"
        return res.status(400).json({
            success: false,
            error: errorMessage,
        });
    }
}

const getStats = async (req: Request, res: Response) => {
    try {
        const result = await postService.getStats()
        res.status(200).json(result)
    } catch (error) {
        const errorMessage =
            error instanceof Error ? error.message : "Stats fetched failed"
        return res.status(400).json({
            success: false,
            error: errorMessage,
        });
    }
}

export const PostController = {
    createPost,
    getAllPost,
    getPostById,
    getMyPost,
    updatePost,
    deletePost,
    getStats
}