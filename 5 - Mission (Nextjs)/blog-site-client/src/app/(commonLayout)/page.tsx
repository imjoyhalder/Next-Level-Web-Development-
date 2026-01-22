import BlogCard from "@/components/modules/home-page/BlogCard";
import { blogService } from "@/services/blog.service";
import { BlogPost } from "@/types";

export default async function Home() {

  const { data } = await blogService.getBlogPost()

  console.log(data);
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 md:px-8 px-2 mt-2">
      {
        data?.data?.map((post: BlogPost) => (
          <BlogCard key={post.id} post={post} />
        ))
      }

    </div>
  );

}
// {
//   data?.data?.map((post: BlogPost) => (
//     <BlogCard key={post.id} post={post} />
//   ))
// }

