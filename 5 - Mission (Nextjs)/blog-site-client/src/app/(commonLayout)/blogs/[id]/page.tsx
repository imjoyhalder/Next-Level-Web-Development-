import { blogService } from "@/services/blog.service";
import { BlogPost, Comment } from "@/types";

// export const dynamicParams = false

export const generateStaticParams = async () => {
    const { data } = await blogService.getBlogPost()

    return data?.data.map((blog: BlogPost) => ({id: blog.id})).splice(0,3)

}

// const BlogPage = async ({ params }: { params: Promise<{ id: string }> }) => {
//     //* this is for client side rendering
//     // const {id} = useParams()

//     const { id } = await params
//     const data = await blogService.getBlogById(id)
//     console.log(data.data);

//     return (
//         <div className="w-10/12 mx-auto px-8">
//             <h1>This is the dynamic page <p className="text-2xl text-indigo-700">{id}</p></h1>
//         </div>
//     );
// };

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const BlogPage = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;
    const res = await blogService.getBlogById(id);
    const blog = res.data;

    if (!blog) {
        return <p className="text-center text-red-500">Blog not found</p>;
    }

    return (
        <div className="w-10/12 mx-auto py-10 space-y-8">
            {/* Blog Card */}
            <Card>
                <CardHeader>
                    <CardTitle className="text-3xl">{blog.title}</CardTitle>

                    <div className="flex flex-wrap gap-2 mt-2">
                        {blog.tags.map((tag: string) => (
                            <Badge key={tag} variant="secondary">
                                #{tag}
                            </Badge>
                        ))}
                    </div>

                    <p className="text-sm text-muted-foreground mt-2">
                        Status: <span className="font-medium">{blog.status}</span> · Views: {blog.views}
                    </p>
                </CardHeader>

                <CardContent className="space-y-4">
                    <p className="text-base leading-relaxed">{blog.content}</p>

                    <Separator />

                    <p className="text-sm text-muted-foreground">
                        Created: {new Date(blog.createdAt).toLocaleDateString()}
                    </p>
                </CardContent>
            </Card>

            {/* Comments Section */}
            <Card>
                <CardHeader>
                    <CardTitle className="text-xl">
                        Comments ({blog._count.comment})
                    </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                    {blog.comment.length === 0 && (
                        <p className="text-muted-foreground">No comments yet</p>
                    )}

                    {blog.comment.map((c: Comment) => (
                        <div
                            key={c.id}
                            className="border rounded-lg p-4 space-y-2"
                        >
                            <p className="text-sm">{c.content}</p>

                            <p className="text-xs text-muted-foreground">
                                {new Date(c.createdAt).toLocaleString()}
                            </p>
                        </div>
                    ))}
                </CardContent>
            </Card>
        </div>
    );
};

export default BlogPage;


