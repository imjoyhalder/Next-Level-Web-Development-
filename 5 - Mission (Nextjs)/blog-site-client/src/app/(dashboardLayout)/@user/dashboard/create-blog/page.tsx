import CreateBlogFormServer from '@/components/modules/user/createBlog/CreateBlogFormServer';
import { blogService } from '@/services/blog.service';
import { BlogPost } from '@/types';

const CreateBlog = async () => {

    const { data } = await blogService.getBlogPost()
    console.log(data);
    return (
        <div>
            <CreateBlogFormServer />
            <h1>Hello </h1>
            <div>
                {
                    data.data.map((item: BlogPost) => {
                        return (
                            <p className='text-red-600' key={item?.id}>{item.title}</p>
                        )
                    })
                }
            </div>
            
        </div>
    );
};

export default CreateBlog;