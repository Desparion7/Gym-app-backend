import express from 'express';
const router = express.Router();
import {
	createNewTrainingSet,
	getUserTrainingSets,
	deleteTrainingSet,
	getTrainingSetById,
	updateTrainingSet
} from '../controllers/trainingSetControllers.js';
import { protect } from '../middleware/authMiddleware.js';

router
	.route('/')
	.post(protect, createNewTrainingSet)
	.get(protect, getUserTrainingSets);
router
	.route('/:id')
	.delete(protect, deleteTrainingSet)
	.get(protect, getTrainingSetById)
	.patch(protect, updateTrainingSet)

export default router;
