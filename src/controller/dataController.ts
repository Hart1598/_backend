import { Request, Response, NextFunction } from 'express'
import fileWrite from '../fileFunc/fileWrite'
import ApiError from '../error/ApiError'

class dataController
{
    async setData(req: Request, res: Response, next:NextFunction):Promise<Response | NextFunction | void>
    {
        try
        {
            const { expressions }  = req.body
           
            const result: number[] = expressions.map((i: string) => eval(i))
            
            fileWrite(result)
                    
            
            return res.status(200).json('OK')
        }
        catch (e)
        {
            return next(ApiError.badRequest('Input data is invalid'))
        }
    }
}

export default new dataController()