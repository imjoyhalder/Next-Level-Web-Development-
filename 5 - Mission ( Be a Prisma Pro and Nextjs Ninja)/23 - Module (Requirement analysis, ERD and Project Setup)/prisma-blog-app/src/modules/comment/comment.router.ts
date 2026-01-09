import express, { Router } from "express"
import { commentController } from "./comment.controller"
import auth, { UserRole } from "../../middlewares/auth"

const router = express.Router()

router.get('/:commentId', commentController.getCommentById)
router.get('/author/:authorId',auth(UserRole.USER, UserRole.ADMIN), commentController.getCommentByAuthor)
router.post('/', auth(UserRole.USER, UserRole.ADMIN), commentController.createComment)
router.delete('/:commentId',auth(UserRole.USER, UserRole.ADMIN), commentController.deleteComment)

export const commentRouter: Router = router