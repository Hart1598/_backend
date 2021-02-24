import {Request, Response, NextFunction} from 'express'
import ApiError, {ApiErrors} from '../error/ApiError'

export const ErorrHandler = (err: ApiErrors, req: Request, res: Response, next: NextFunction) =>
{
    if (err instanceof ApiError) {
        return res.status(err.status).json({ message: err.message })
    }

    return res.status(500).json({ message: 'Непредвиденная ошибка!' })
}