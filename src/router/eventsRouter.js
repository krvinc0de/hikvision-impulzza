import { Router } from 'express'
import { faceRecognitionController } from '../controller/faceRecognitionController.js'
const router = Router()

router.post('/event', faceRecognitionController)

export default router