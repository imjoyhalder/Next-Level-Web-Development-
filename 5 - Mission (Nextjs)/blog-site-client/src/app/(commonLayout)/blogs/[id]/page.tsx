
const BlogPage = async({ params }: { params: Promise<{ id: string }> }) => {
    //* this is for client side rendering
    // const {id} = useParams()

    const {id} = await params
    console.log(id);

    return (
        <div className="w-10/12 mx-auto px-8">
            <h1>This is the dynamic page <p className="text-2xl text-indigo-700">{id}</p></h1>
        </div>
    );
};

export default BlogPage;