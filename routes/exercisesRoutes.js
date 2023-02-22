import express from 'express';
const router = express.Router();
import { getExercise } from '../controllers/exercisesControllers.js';

router.route('/:url').get(getExercise);

export default router;
