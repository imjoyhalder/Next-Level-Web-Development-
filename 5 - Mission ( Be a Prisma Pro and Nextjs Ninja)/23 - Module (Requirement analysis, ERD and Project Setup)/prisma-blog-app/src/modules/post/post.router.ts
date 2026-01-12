import express from 'express';
import { PostController } from './post.controller';

import auth, { UserRole } from '../../middlewares/auth';

const router = express.Router()

router.get('/stats', auth(UserRole.ADMIN), PostController.getStats)
router.get('/', PostController.getAllPost)
router.get("/:postId", PostController.getPostById)
router.get("/my-posts/author", auth(UserRole.USER, UserRole.ADMIN), PostController.getMyPost)
router.post('/', auth(UserRole.USER, UserRole.ADMIN), PostController.createPost)
router.patch('/:postId', auth(UserRole.USER, UserRole.ADMIN), PostController.updatePost)
router.delete('/:postId', auth(UserRole.USER, UserRole.ADMIN), PostController.deletePost)



export const postRouter = router;