import { Request, Response, NextFunction } from 'express'
import ApiError from '../error/ApiError'
import fileRead from '../fileFunc/fileRead'
class resultController
{
    async getData(req: Request, res: Response, next: NextFunction):Promise<Response | NextFunction | void>
    {
        try
        {
            const data: string[] | undefined = await fileRead()
            
            if (data?.length)
            {
                return res.status(200).json({results: data})
            }
            else
            {
                return res.status(200).json({results: []})
            }
 
        }
        catch(e) {
            return next(ApiError.badRequest('File error'))
        }
    }
}

export default new resultController()