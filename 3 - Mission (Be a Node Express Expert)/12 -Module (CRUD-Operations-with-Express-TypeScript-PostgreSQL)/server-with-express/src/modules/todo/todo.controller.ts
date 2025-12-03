import { Request, Response } from "express";
import { todoServices } from "./todo.service";

const createTodo = async (req: Request, res: Response) => {
    try {
        const result = await todoServices.createTodo(req.body)
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
}

const getAllTodo = async (req: Request, res: Response) => {
    try {
        const result = await todoServices.getAllTodo()
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
}

const getSingleTodo = async (req: Request, res: Response) => {
    try {
        const result = await todoServices.getSingleTodo(req.params.id!)

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
}

const getTodoByUserId = async (req: Request, res: Response) => {
    try {
        const result = await todoServices.getTodoByUserId(req.params.id!)
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
}

const updateTodo = async (req: Request, res: Response) => {
    try {
        const { title, description } = req.body;
        const result = await todoServices.updateTodo(title, description, req.params.id!)
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
}

const deleteTodo = async (req: Request, res: Response) => {
    try {
        const result = await todoServices.deleteTodo(req.params.id!)
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
}

export const todoControllers = {
    createTodo,
    getAllTodo,
    getSingleTodo,
    getTodoByUserId,
    updateTodo, 
    deleteTodo,
}