import express from 'express';
const router = express.Router();
import { createNewTraining } from '../controllers/trainingControllers.js';
import { protect } from '../middleware/authMiddleware.js';

router.route('/').post(protect, createNewTraining);

export default router;
