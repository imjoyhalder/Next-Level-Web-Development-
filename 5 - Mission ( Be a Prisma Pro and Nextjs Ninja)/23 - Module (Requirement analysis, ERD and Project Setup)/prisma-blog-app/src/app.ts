import express, { Application, Request, Response } from "express"
import path from "node:path"

const app: Application = express()

app.get('/', (req: Request, res: Response) => {
            res.status(500).send({
                success: true,
                message: 'Blog app Server running',
                path: req.path
            })
        })


export default app; 