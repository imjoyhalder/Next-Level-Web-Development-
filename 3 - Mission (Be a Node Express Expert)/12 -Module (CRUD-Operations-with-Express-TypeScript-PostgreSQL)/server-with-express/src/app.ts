import express, { Response, Request} from 'express'
import config from './config'
import logger from './middleware/logger';
import { UserRoutes } from './modules/user/user.routes';
import { todoRoutes } from './modules/todo/todo.routes';
import { authRoutes } from './modules/auth/auth.routes';
import initDB from './config/db';

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

//* user routes
app.use('/users', UserRoutes)

//* todo routes
app.use('/todos', todoRoutes)

//* auth routes
app.use('/auth', authRoutes)

// not found route
app.use((req: Request, res: Response) => {
    res.status(404).json({
        success: false,
        message: 'Route not found',
        path: req.path
    })
})

export default app; 