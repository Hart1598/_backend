import express, {Router} from 'express'
import controller from '../controller/dataController'
import dataMiddlewareCheckNumbers from '../middleware/dataMiddlewareCheckNumbers'
import dataMiddlewareCheckSymbols from '../middleware/dataMiddlewareCheckSymbols'

const router: Router = express.Router()


router.post('/data',[dataMiddlewareCheckNumbers, dataMiddlewareCheckSymbols], controller.setData)

export default router