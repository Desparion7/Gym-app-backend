import express from 'express';
const router = express.Router();
import { protect } from '../middleware/authMiddleware.js';
import { getUserRecords } from '../controllers/recordsControllers.js';

router.route('/').get(protect, getUserRecords);

export default router;
