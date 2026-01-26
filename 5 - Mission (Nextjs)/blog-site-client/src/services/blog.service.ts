
import { cookies } from 'next/headers';
import { env } from '../env'


const API_URL = env.API_URL

interface ServiceOptions {
    cache?: RequestCache
    revalidate?: number
}
interface GetBlogParams {
    isFeatured?: boolean
    search?: string
}

export interface BlogData {
    title: string;
    content: string;
    tags?: string[];
}



export const blogService = {
    getBlogPost: async (params?: GetBlogParams, options?: ServiceOptions) => {
        try {

            const url = new URL(`${API_URL}/posts`)
            // url.searchParams.append("key", "value")

            if (params) {
                // console.log(Object.entries(params));
                Object.entries(params).forEach(([key, value]) => {
                    if (value !== null && value !== undefined && value !== "") {
                        url.searchParams.append(key, value)
                    }
                })
            }

            // console.log(url.toString());

            const config: RequestInit = {}

            if (options?.cache) {
                config.cache = options.cache
            }

            if (options?.revalidate) {
                config.next = { revalidate: options.revalidate }
            }

            config.next = { ...config.next, tags: ["blogPosts"] }

            // const res = await fetch(url.toString(), {
            //     next: {
            //         tags: ['blogPost']
            //     }
            // })
            const res = await fetch(url.toString(), config)
            const data = await res.json()

            return { data: data, error: null }

        } catch (error) {
            return { data: null, error: { message: error } }
        }
    },

    getBlogById: async (id: string) => {
        try {
            const res = await fetch(`${API_URL}/posts/${id}`)
            const data = await res.json()

            return { data: data, error: null }
        } catch (error) {
            return { data: null, error: { message: error } }
        }
    },

    createBlogPost: async (blogData: BlogData) => {
        try {
            
            const cookieStore = await cookies()

            const res = await fetch(`${API_URL}/posts`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Cookie: cookieStore.toString()
                },
                body: JSON.stringify(blogData),
            });

            const data = await res.json();

            if (!res.ok) {
                return {
                    data: null,
                    error: data?.message || "Something went wrong",
                };
            }

            return { data, error: null };
        } catch (error) {
            console.error(error);
            return { data: null, error: "Something went wrong" };
        }
    }

}