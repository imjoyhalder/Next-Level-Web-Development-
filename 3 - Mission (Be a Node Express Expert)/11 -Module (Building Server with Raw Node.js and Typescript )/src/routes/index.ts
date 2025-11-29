import { writeUsers } from './../helpers/fileDb';
import { readUsers } from "../helpers/fileDb"
import paresBody from "../helpers/parseBody"
import addRoutes from "../helpers/RouteHandler"
import { sendJson } from "../helpers/sendJson"

addRoutes('GET', "/", (req, res) => {
    sendJson(res, 200, {
        message: 'Hello from node js with TypeScript...',
        path: req.url
    })
})

addRoutes('GET', '/api', (req, res) => {
    sendJson(res, 200, {
        message: 'Health status ok...',
        path: req.url
    })
})

addRoutes("POST", '/api/users', async(req, res) => {
    try {
        const body = await paresBody(req)
        const users = readUsers()
        const newUser = {
            id: Date.now(), 
            ...body
        }
        users.push(newUser)
        writeUsers(users)
        sendJson(res, 201, {success: true, data: body})
    } catch (error: any) {
        console.log(error.message);
    }
})


addRoutes("PUT", '/api/users/:id', async(req, res)=>{
    const {id} = (req as any).params
    const body = await paresBody(req)

    const users = readUsers()
    
    const index = users.findIndex((user: any)=> user.id == id)
    if(index===-1){
        sendJson(res, 404, {
            success: false, 
            message: 'user not found'
        })
    }
    users[index] = {
        ...users[index], ...body
    }
    writeUsers(users)
    sendJson(res, 202, {
        success:true, 
        message: `${id} user updated`, 
        data: users[index]
    })
})

addRoutes("DELETE", '/api/users/:id', async(req, res)=>{
    const {id} = (req as any).params

    const users = readUsers()
    const index = users.findIndex((user: any)=> user.id == id)
    if(index===-1){
        sendJson(res, 404, {
            success: false, 
            message: `${id} user not found` 
        })
    }
    users.splice(index, 1)
    // users[index] = {}
    writeUsers(users)
    sendJson(res,200,{
        success: true, 
        message: `${id} user deleted`
    })
})