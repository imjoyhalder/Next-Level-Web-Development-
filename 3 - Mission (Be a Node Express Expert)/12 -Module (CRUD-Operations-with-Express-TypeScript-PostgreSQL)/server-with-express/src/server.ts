import express, { Response, Request, NextFunction } from 'express'
import { Pool, Result } from 'pg'
import config from './config'
import initDB, { pool } from './config/db';
import logger from './middleware/logger';
import { UserRoutes } from './modules/user/user.routes';
import { todoRoutes } from './modules/todo/todo.routes';


const app = express()
const port = config.port; 


//parser 
app.use(express.json())
app.use(express.urlencoded())

// initialize DB
initDB()


app.get('/', logger, (req: Request, res: Response) => {
    res.send('Hello Next Level Developer')
})

//* user routes
app.use('/users', UserRoutes)

//* Todo Routes
app.use('/todos', todoRoutes)


// // update todo
// app.put('/todos/:id', async (req: Request, res: Response) => {
//     try {
//         const { title, description } = req.body;
//         const result = await pool.query('UPDATE todos SET title=$1, description=$2 WHERE id=$3 RETURNING *', [
//             title, description, req.params.id
//         ])
//         if (result.rows.length === 0) {
//             res.status(404).json({
//                 success: false,
//                 message: 'User not found'
//             })
//         }
//         else {
//             res.status(200).json({
//                 success: true,
//                 message: 'Todo updated successfully',
//                 data: result.rows[0]
//             })
//         }
//     } catch (error: any) {
//         res.status(500).json({
//             success: false,
//             message: error.message
//         })
//     }
// })

// delete single todo
app.delete('/todos/:id', async (req: Request, res: Response) => {
    try {
        const result = await pool.query(`DELETE FROM todos WHERE id=$1`, [req.params.id])
        if (result.rowCount == 0) {
            res.status(404).json({
                success: false,
                message: 'Todo not found'
            })
        }
        else {
            res.status(201).json({
                success: true,
                message: 'Todo deleted successfully',
            })
        }
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
})

// not found route
app.use((req: Request, res: Response) => {
    res.status(404).json({
        success: false,
        message: 'Route not found',
        path: req.path
    })
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
