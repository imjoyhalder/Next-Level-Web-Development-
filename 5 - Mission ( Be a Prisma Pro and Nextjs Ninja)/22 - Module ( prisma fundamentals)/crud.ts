import { prisma } from "./lib/prisma"

const run = async () => {
    // const createUser = await prisma.user.create({
    //     data: {
    //         name: 'Ratna Halder', 
    //         email: 'ratna@gmail.com'
    //     }
    // })
    // console.log('Created user: ', createUser);

    // create post for user id 1 
    
    // const createPost = await prisma.post.create({
    //     data: {
    //         title: 'Leader is ....', 
    //         content: "Desher ja obosta tate besi din valo kore bacha jabe na", 
    //         authorId: 1
    //     }
    // })
    // console.log('Create post: ', createPost);


    const createProfile = await prisma.profile.create({
        data: {
            bio: 'Life is beautiful if you have money', 
            userId: 1
        }
    })
    console.log(createProfile);
}
run()