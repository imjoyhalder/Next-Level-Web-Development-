import { NextFunction, Request, Response } from "express";
import { error } from "node:console";

const errorHandler = (error: any, req: Request, res: Response, next: NextFunction) => {
    res.status(500)
    res.render('error', { error: error })
}

export default errorHandler