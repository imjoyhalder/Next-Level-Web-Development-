import { userService } from '@/services/user.service';


const BlogPage = async() => {
    const session = await  userService.getSession()
    console.log(session);
    return (
        <div>
            
        </div>
    );
};

export default BlogPage;