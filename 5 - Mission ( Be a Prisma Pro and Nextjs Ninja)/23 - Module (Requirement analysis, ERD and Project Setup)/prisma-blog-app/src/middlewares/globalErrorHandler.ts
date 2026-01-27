import { NextFunction, Request, Response } from "express";
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
        else if (error.code === "P2002") {
            statusCode = 400;
            errorMessage = "Unique constraint failed "
        }
        else if (error.code === "P2003") {
            statusCode = 400;
            errorMessage = "Foreign key constraint failed"
        }
    }

    //PrismaClientUnknownRequestError
    else if (error instanceof Prisma.PrismaClientUnknownRequestError) {
        statusCode = 500
        errorMessage = "Error occurred during query execution"
    }

    //PrismaClientRustPanicError
    else if (error instanceof Prisma.PrismaClientRustPanicError) {
        statusCode = 500
        errorMessage = "Prisma engine crashes and exits"
    }

    //PrismaClientInitializationError
    else if (error instanceof Prisma.PrismaClientInitializationError) {
        if (error.errorCode === "P1000") {
            statusCode = 401
            errorMessage = "Authentication failed please check your credentials!"
        }
        else if (error.errorCode === "P1001") {
            statusCode = 400
            errorMessage = "Can't reach database server"
        }
    }

    res.status(statusCode)
    res.json({
        message: errorMessage,
        error: errorDetails
    })
}

export default errorHandler