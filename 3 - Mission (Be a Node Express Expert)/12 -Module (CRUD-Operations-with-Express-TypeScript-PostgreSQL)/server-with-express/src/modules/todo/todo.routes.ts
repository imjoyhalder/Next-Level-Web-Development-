import express from 'express'
import { todoControllers } from './todo.controller';

const router = express.Router()

router.post('/', todoControllers.createTodo)

router.get('/', todoControllers.getAllTodo)

router.get('/:id', todoControllers.getSingleTodo)

export const todoRoutes = router; 