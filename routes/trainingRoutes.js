import express from 'express';
const router = express.Router();
import {
	createNewTraining,
	getUserTrainings,
	getTrainingById,
	updateTraining,
} from '../controllers/trainingControllers.js';

import { protect } from '../middleware/authMiddleware.js';

router
	.route('/')
	.post(protect, createNewTraining)
	.get(protect, getUserTrainings);
router
	.route('/:id')
	.get(protect, getTrainingById)
	.patch(protect, updateTraining);

export default router;
