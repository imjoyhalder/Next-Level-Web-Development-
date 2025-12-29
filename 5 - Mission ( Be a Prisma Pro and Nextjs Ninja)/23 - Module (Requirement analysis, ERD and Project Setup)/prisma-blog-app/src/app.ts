import express, { Application, Request, Response } from "express"
import path from "node:path"
import { postRouter } from "./modules/post/post.router"

const app: Application = express()

app.use(express.json())

app.use('/posts', postRouter)

app.get('/', (req: Request, res: Response) => {
    res.status(200).send({
        success: true,
        message: 'Blog app Server running',
        path: req.path
    })
})


export default app; 