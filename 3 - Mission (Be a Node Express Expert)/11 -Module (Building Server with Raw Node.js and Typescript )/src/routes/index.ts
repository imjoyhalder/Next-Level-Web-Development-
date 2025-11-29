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