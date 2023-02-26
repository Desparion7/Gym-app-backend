import express from 'express';
const router = express.Router();
import { getExampleTraining } from '../controllers/exampleTrainingControllers.js';

router.route('/:path').get(getExampleTraining);

export default router;