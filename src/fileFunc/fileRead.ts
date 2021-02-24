import * as path from "path"
import * as fs from 'fs'

const fileRead = async (): Promise<string[] | undefined> =>
{
    try
    {
        const fileName: string = 'result.json'
        const filePath: string = path.resolve(__dirname, '..', 'static')
        
        if(!fs.existsSync(filePath)) {
            fs.mkdirSync(filePath, { recursive: true })
        }

        if (!fs.existsSync(path.resolve(filePath, fileName)))
        {
            await fs.writeFile(path.resolve(filePath, fileName), '', (err) =>
            {
                if (err)
                {
                    throw new Error('Fail write file')
                }
            })
        }

        const readFile = (pathToFIle: string, opts = 'utf8'): Promise<string> =>
            new Promise((resolve, reject) => {
                fs.readFile(pathToFIle, opts, (err: NodeJS.ErrnoException | null, data: string) => {
                    if (err) reject(err)
                    else resolve(data)
                })
            })
        
        const response = await readFile(path.resolve(filePath, fileName))
        const result = response.split('\n')
        result.pop()

        return result
    }
    catch (e)
    {
        throw new Error(e)
    }
}

export default fileRead