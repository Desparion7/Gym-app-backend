import express from 'express';
const router = express.Router();
import {
	createNewUser,
	updateUser,
	resetPassword,
	newPassword,
} from '../controllers/usersControllers.js';
import { protect } from '../middleware/authMiddleware.js';

router.route('/').post(createNewUser).patch(protect, updateUser);
router.route('/reset').post(resetPassword).patch(newPassword);

export default router;
