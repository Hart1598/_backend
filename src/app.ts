import express, {Application, } from 'express'
import dotenv from 'dotenv'
import routerData from './routes/data'
import routerResult from './routes/result'
import { ErorrHandler } from './middleware/ErrorHandlingMiddleware'
dotenv.config()

const app: Application = express()

app.use(express.json())

app.use('/', routerData)
app.use('/', routerResult)

app.use(ErorrHandler)

const start: Function = () =>
{
    const PORT = process.env.PORT || 5000
    app.listen(PORT, () => console.log(`server has been started on PORT ${PORT}`))
}

start()