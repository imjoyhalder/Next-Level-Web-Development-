import { NextFunction, Request, Response } from "express";
import { error } from "node:console";
import { Prisma } from "../../generated/prisma/client";

const errorHandler = (error: any, req: Request, res: Response, next: NextFunction) => {
    let statusCode = 500
    let errorMessage = "Internal Server Error"
    let errorDetails = error

    // PrismaClientValidationError 
    if(error instanceof Prisma.PrismaClientValidationError){
        statusCode = 400
        errorMessage = "You provide incorrect field type or missing fields!"
    }


    res.status(statusCode)
    res.json({
        message: errorMessage,
        error: errorDetails
    })
}

export default errorHandler