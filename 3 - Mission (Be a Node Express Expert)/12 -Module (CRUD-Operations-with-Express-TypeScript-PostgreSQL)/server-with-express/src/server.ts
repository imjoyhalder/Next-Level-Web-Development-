import express, { Response, Request, NextFunction } from 'express'
import { Pool, Result } from 'pg'
import config from './config'
import initDB, { pool } from './config/db';
import logger from './middleware/logger';
import { UserRoutes } from './modules/user/user.routes';


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

// ----------------users CRUD--------------------

app.use('/users', UserRoutes)


// delete single user 
app.delete('/users/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const result = await pool.query(`DELETE FROM users WHERE id=$1 RETURNING *`, [id])
        if (result.rowCount === 0) {
            res.status(404).json({
                success: false,
                message: 'user not found'
            })
        }
        else {
            res.status(500).json({
                success: false,
                message: 'user deleted successfully',
                data: result.rows
            })
        }
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
})

// -----------todos CRUD--------------
app.post('/todos', async (req: Request, res: Response) => {
    try {
        const { user_id, title, description } = req.body
        const result = await pool.query(`INSERT INTO todos (user_id, title, description) VALUES ($1,$2,$3) RETURNING *`, [
            user_id, title, description
        ])
        res.status(200).json({
            success: true,
            message: 'todos created successfully',
            data: result.rows[0]
        })
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
})

// get single todo
app.get('/todos/:id', async (req: Request, res: Response) => {
    try {
        const result = await pool.query(`SELECT * FROM todos WHERE id = $1`, [req.params.id])

        if (result.rows.length === 0) {
            res.status(404).json({
                success: false,
                message: 'todo not found'
            })
        }
        else {
            res.status(200).json({
                success: true,
                message: 'Todo fetched successfully',
                data: result.rows[0]
            })
        }
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
})

// get all todos
app.get('/todos', async (req: Request, res: Response) => {
    try {
        const result = await pool.query(`SELECT * FROM todos `)
        res.status(201).json({
            success: true,
            message: 'All todos fetched successfully',
            data: result.rows
        })
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
})

// get todo by user id 
app.get('/todos/users/:id', async (req: Request, res: Response) => {
    try {
        const result = await pool.query(`SELECT FROM todos WHERE user_id=$1`, [req.params.id])
        if (result.rows.length === 0) {
            res.status(201).json({
                success: false,
                message: ' todos not found',
            })
        }
        else {
            res.status(200).json({
                success: true,
                message: ' todos fetched successfully',
                data: result.rows
            })
        }
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
})

// update todo
app.put('/todos/:id', async (req: Request, res: Response) => {
    try {
        const { title, description } = req.body;
        const result = await pool.query('UPDATE todos SET title=$1, description=$2 WHERE id=$3 RETURNING *', [
            title, description, req.params.id
        ])
        if (result.rows.length === 0) {
            res.status(404).json({
                success: false,
                message: 'User not found'
            })
        }
        else {
            res.status(200).json({
                success: true,
                message: 'Todo updated successfully',
                data: result.rows[0]
            })
        }
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
})

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
