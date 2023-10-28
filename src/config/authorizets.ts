import { NextFunction, Request, RequestHandler, Response } from 'express';
import * as jwt from 'jsonwebtoken'
import { AppError } from './error';
import { config } from 'dotenv'
const parsedToken = config({ path: process.cwd()+'/.env.auth' }).parsed?.SECRET || "NONTOKEN"
export function authorize(req: Request, res: Response, next: NextFunction) {
    const token = req.header('Authorization')
    if (!token) {
        throw new AppError('Sem acesso/Token inválida')
    }
    try {
        const decoded = jwt.verify(token,parsedToken)
        next()
    } catch (error) {
        throw new AppError('Token inválida!')
    }
}