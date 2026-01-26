"use server"

import { BlogData, blogService } from "@/services/blog.service"
import { updateTag } from "next/cache";

export const getBlog = async () => {
    return await blogService.getBlogPost()
}

export const createBlogPost = async (data: BlogData) => {
    const res = await blogService.createBlogPost(data);
    updateTag("blogPosts");
    return res;
};