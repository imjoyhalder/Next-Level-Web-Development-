import { Request, Response } from "express"
import { postService } from "./post.service";
import { Post } from "../../../generated/prisma/client";


const createPost = async (req: Request, res: Response) => {
    try {
    
        if(!req?.user){
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
        const result = await postService.getPost();
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