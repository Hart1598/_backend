import fileWrite from "../fileFunc/fileWrite"

interface IError
{
    status: number
    message: string
}

class ApiError
{
    message: string
    status: number
    constructor(status: number, message: string)
    {
        this.status = status
        this.message = message
    }

    static badRequest(message: string):IError
    {
        fileWrite([])
        return new ApiError(400, message)
    }
}

export type ApiErrors = IError

export default ApiError