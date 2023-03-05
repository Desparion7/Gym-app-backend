import express from 'express';
const router = express.Router();
import { createNewUser, updateUser } from '../controllers/usersControllers.js';
import { protect } from '../middleware/authMiddleware.js';

router.route('/').post(createNewUser).patch(protect, updateUser);

export default router;
