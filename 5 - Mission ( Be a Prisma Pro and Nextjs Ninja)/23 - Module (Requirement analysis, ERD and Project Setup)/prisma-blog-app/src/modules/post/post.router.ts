import { Router } from './../../../node_modules/@types/express-serve-static-core/index.d';
import  express  from 'express';
import { PostController } from './post.controller';


const router = express.Router()

router.post('/',PostController.createPost)
router.get('/', PostController.getAllPost)

export const postRouter = router ;