import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { env } from '@/env';
import { cookies } from 'next/headers';



const API_URL = env.API_URL

const CreateBlogFormServer = () => {

    const createBlog = async (formdata: FormData) => {
        "use server"

        const title = formdata.get("title") as string
        const content = formdata.get("content") as string
        const tags = formdata.get("tags") as string

        const blogData = {
            title,
            content,
            tags: tags.split(',')
                .map((item) => item.trim())
                .filter((item) => item !== '')
        }

        const cookieStore = await cookies()
        const res = await fetch(`${API_URL}/posts`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Cookie: cookieStore.toString()
            },
            body: JSON.stringify(blogData)
        })


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
                            <FieldLabel htmlFor='title'>Title</FieldLabel>
                            <Input
                                id='title'
                                name='title'
                                type='text'
                                placeholder='Blog title'
                                required>
                            </Input>
                        </Field>
                        <Field>
                            <FieldLabel htmlFor='content'>Content</FieldLabel>
                            <Textarea
                                id='content'
                                name='content'
                                placeholder='Write blog'
                                required
                            ></Textarea>
                        </Field>
                        <Field>
                            <FieldLabel htmlFor='tags'>Tags (comma separated)</FieldLabel>
                            <Input
                                type='text'
                                id='tags'
                                name='tags'
                                placeholder='web, next, dev'
                                required
                            >
                            </Input>
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