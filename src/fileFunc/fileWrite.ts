import * as fs from 'fs'
import * as path from 'path'
import { Response } from 'express'

const fileWrite = async (result: number[]): Promise<Response | void> =>
{
    
    const fileName:string = 'result.json'
    const filePath:string = path.resolve(__dirname, '..', 'static')
    if(!fs.existsSync(filePath)) {
        fs.mkdirSync(filePath, {recursive: true})
    }

    await fs.writeFile(path.resolve(filePath, fileName), '', (err): Error | void =>
    {
        if (err)
        {
            throw new Error('Fail write file')
        }
    })

    result.forEach(async (item: number): Promise<Error | void> =>
    {
        await fs.appendFile(path.resolve(filePath, fileName), `${item}\n`, (err) =>
        {
            if (err)
            {
                throw new Error('Fail append info to file')
            }
        })
    })
}
            
export default fileWrite