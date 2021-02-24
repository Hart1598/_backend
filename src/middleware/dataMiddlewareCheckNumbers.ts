import {Request, Response, NextFunction} from 'express'
import ApiError from '../error/ApiError'


const dataMiddlewareCheckNumbers = (req: Request, res: Response, next: NextFunction): NextFunction | Response | undefined | void =>
{
    if(req.method === 'OPTIONS'){
        next()
    }

    try
    {
        const { expressions } = req.body

        const arrayOfNumbers: any = expressions.map((expression: string) => expression.replace(/[^0-9]/g, ',').split(',')
            .filter((ex: string) => ex !== '')
            .map(((ex: string) => Number.parseInt(ex))))
        
        for (let i = 0; i < arrayOfNumbers.length; i++)
        {
            for (let j = 0; j < arrayOfNumbers[i].length; j++)
            {
                if (!(arrayOfNumbers[i][j] <= 1000 && arrayOfNumbers[i][j] >= 0))
                {
                    return next(ApiError.badRequest('Big or small number'))
                }
            }
        }
        next()
    }
    catch (e)
    {
        return next(ApiError.badRequest('Error reading numbers'))
    }
}


export default dataMiddlewareCheckNumbers