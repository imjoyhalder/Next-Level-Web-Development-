import express from 'express';
import { PostController } from './post.controller';

import  auth,{ UserRole} from '../../middlewares/auth';

const router = express.Router()

router.get('/', PostController.getAllPost)
router.get("/:postId", PostController.getPostById)
router.get("/my-posts/author",auth(UserRole.USER, UserRole.ADMIN), PostController.getMyPost)
router.post('/', auth(UserRole.USER, UserRole.ADMIN), PostController.createPost)



export const postRouter = router;