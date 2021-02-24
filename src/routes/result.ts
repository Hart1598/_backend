import express, {Router} from 'express'
import controller from '../controller/resultController'

const router: Router = express.Router()


router.get('/result', controller.getData)

export default router