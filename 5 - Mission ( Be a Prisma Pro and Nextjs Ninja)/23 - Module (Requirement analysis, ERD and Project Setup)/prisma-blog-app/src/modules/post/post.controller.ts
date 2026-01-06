import { string } from 'better-auth';
import { Request, Response } from "express"
import { postService } from "./post.service";
import { Post } from "../../../generated/prisma/client";


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

        const result = await postService.getAllPost({ search: searchString, tags, isFeatured });
        res.status(200).send(result)
    } catch (error: any) {
        res.status(400).json({
            error: "Post creation failed.",
            details: error
        })
    }
}


export const PostController = {
    createPost,
    getAllPost
}