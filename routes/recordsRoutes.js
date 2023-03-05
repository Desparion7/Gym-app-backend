import express from 'express';
const router = express.Router();
import { protect } from '../middleware/authMiddleware.js';
import {
	getUserRecords,
	createNewRecord,
	updateRecords,
	deleteRecord,
} from '../controllers/recordsControllers.js';

router.route('/').get(protect, getUserRecords).post(protect, createNewRecord);
router
	.route('/:id')
	.patch(protect, updateRecords)
	.delete(protect, deleteRecord);

export default router;
