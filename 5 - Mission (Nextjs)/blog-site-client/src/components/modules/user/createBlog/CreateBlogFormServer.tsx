import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';


const CreateBlogFormServer = () => {

    const createBlog = async (formdata: FormData) => {
        "use server"
        console.log( await formdata.get('title'));
    }

    return (
        <Card className='max-w-2xl mx-auto'>
            <CardHeader>
                <CardTitle>Create Blog</CardTitle>
                <CardDescription>You can write your blog here</CardDescription>
            </CardHeader>
            <CardContent>
                <form action={createBlog} id='blog-form'>
                    <FieldGroup>
                        <Field>
                            <FieldLabel>Title</FieldLabel>
                            <Input type='text'  name='title'></Input>
                        </Field>
                        <Field>
                            <FieldLabel>Content</FieldLabel>
                            <Input type='text' name='title'></Input>
                        </Field>
                        <Field>
                            <FieldLabel>Tags</FieldLabel>
                            <Input type='text'  name='title'></Input>
                        </Field>
                    </FieldGroup>
                </form>
            </CardContent>
            <CardFooter>
                <Button className='w-full' type='submit' form='blog-form'>
                    Submit
                </Button>
            </CardFooter>
        </Card>
    );
};

export default CreateBlogFormServer;