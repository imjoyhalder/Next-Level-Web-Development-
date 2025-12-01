import express, { Response, Request } from 'express'
import { Pool } from 'pg'
import dotenv from "dotenv"

const app = express()
const port = 5000
const env = dotenv.config()

//parser 
app.use(express.json())
app.use(express.urlencoded())


//DB
const pool = new Pool({
    //connectionString : `postgresql://neondb_owner:npg_TeHIo0clQr1p@ep-dry-boat-a4vwagqk-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require`
    connectionString: process.env.PG
})


const initDB = async () => {
    await pool.query(`
        CREATE TABLE IF NOT EXISTS users(
            id SERIAL PRIMARY KEY, 
            name VARCHAR(100) NOT NULL, 
            email VARCHAR(150) UNIQUE NOT NULL, 
            age INT, 
            phone VARCHAR(15), 
            address TEXT, 
            created_at TIMESTAMP DEFAULT NOW(), 
            updated_at TIMESTAMP DEFAULT NOW()
        )
    `)
}

initDB()

app.get('/', (req: Request, res: Response) => {
    res.send('Hello Next Level Developer')
})

app.post('/', (req: Request, res: Response) => {
    res.status(200).json({
        success: true,
        message: 'created data successfully'
    })
    console.log(req.body);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
