import express from 'express';
const router = express.Router();
import { createNewUser } from '../controllers/usersControllers.js';

router.route('/').post(createNewUser);

export default router;
