import {Request, Response, NextFunction} from 'express'
import ApiError from '../error/ApiError'

const dataMiddlewareCheckSymbols = (req: Request, res: Response, next: NextFunction):NextFunction | Response | undefined | void =>
{
    if (req.method === 'OPTIONS')
    {
        next()
    }

    try
    {
        const { expressions } = req.body

        const symbols = ['+', '-', '*', '/', '(', ')']
        
        const arrayOfSymbols = expressions.map((expression: string) => expression.replace(/[0-9]/g, " ").split(' ')
            .filter((ex: string) => ex !== ''))
            
        for (let i = 0; i < arrayOfSymbols.length; i++)
        {
            for (let j = 0; j < arrayOfSymbols[i].length; j++)
            {
                if (!(symbols.includes(arrayOfSymbols[i][j])))
                {
                    return next(ApiError.badRequest('Forbidden symbol'))
                }
                
            }
        }
        
        next()
    }
    catch (e)
    {
        return next(ApiError.badRequest('Error reading symbols'))
    }
}

export default dataMiddlewareCheckSymbols