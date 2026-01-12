import { NextFunction, Request, Response } from "express";
import { error } from "node:console";
import { Prisma } from "../../generated/prisma/client";

const errorHandler = (error: any, req: Request, res: Response, next: NextFunction) => {
    let statusCode = 500
    let errorMessage = "Internal Server Error"
    let errorDetails = error

    // PrismaClientValidationError 
    if (error instanceof Prisma.PrismaClientValidationError) {
        statusCode = 400
        errorMessage = "You provide incorrect field type or missing fields!"
    }

    //PrismaClientKnownRequestError
    else if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === "P2025") {
            statusCode = 400;
            errorMessage = "The current database provider doesn't support a feature that the query used"
        }
        else if(error.code === "P2002"){
            statusCode = 400; 
            errorMessage = "Unique constraint failed "
        }
        else if(error.code === "P2003"){
            statusCode = 400; 
            errorMessage = "Foreign key constraint failed"
        }
    }

    res.status(statusCode)
    res.json({
        message: errorMessage,
        error: errorDetails
    })
}

export default errorHandler