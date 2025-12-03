import { pool } from "../../config/db"


const createTodo = async (user_id: string, title: string, description: string) => {
    const result = await pool.query(`INSERT INTO todos (user_id, title, description) VALUES ($1,$2,$3) RETURNING *`, [
        user_id, title, description
    ])
    return result; 
}

const getAllTodo = async()=>{
    const result = await pool.query(`SELECT * FROM todos`)
    return result; 
}

const getSingleTodo = async(id: string)=>{
    const result = await pool.query(`SELECT * FROM todos WHERE id=$1`, [id])
    return result; 
}

export const todoServices = {
    createTodo,
    getAllTodo, 
    getSingleTodo, 
}