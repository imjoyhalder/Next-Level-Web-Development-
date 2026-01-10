import { auth as betterAuth } from "../lib/auth"
import { NextFunction, Request, Response } from "express"

declare global {
    namespace Express {
        interface Request {
            user?: {
                id: string,
                email: string,
                name: string,
                role: string,
                emailVerified: boolean
            }
        }
    }
}

export enum UserRole {
    USER = "USER",
    ADMIN = "ADMIN"
}

const auth = (...roles: UserRole[]) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            // get user session 
            const session = await betterAuth.api.getSession({
                headers: req.headers as any
            })

            if (!session) {
                res.status(401).json({
                    success: false,
                    message: 'You are not authorized!'
                })
            }

            if (!session?.user.emailVerified) {
                res.status(401).json({
                    success: false,
                    message: 'Email verification required. Please verify your email!'
                })
            }

            req.user = {
                id: session?.user.id as string,
                email: session?.user.email as string,
                name: session?.user.name as string,
                role: session?.user.role as string,
                emailVerified: session?.user.emailVerified as boolean
            }

            if (roles.length && !roles.includes(req.user.role as UserRole)) {
                res.status(403).json({
                    success: false,
                    message: "Forbidden! You don't have permission access this resources"
                })
            }
            next()

        } catch (error) {
            next(error)
        }
    }
}

export default auth; 