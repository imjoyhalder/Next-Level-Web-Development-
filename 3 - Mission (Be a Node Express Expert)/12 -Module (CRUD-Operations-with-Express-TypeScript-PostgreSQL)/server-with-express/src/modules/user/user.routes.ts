import express, { Request, Response } from "express"
import { userControllers } from "./user.controller";
import auth from "../../middleware/auth";


const router = express.Router()

router.post('/',  userControllers.createUser)

router.get('/', auth('admin'), userControllers.getAllUser)

router.get('/:id', userControllers.getSingleUser)

router.put('/:id', userControllers.updateUser)

router.delete('/:id', userControllers.deleteUser)

export const UserRoutes = router