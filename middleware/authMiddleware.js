import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import asyncHandler from 'express-async-handler';

const protect = asyncHandler(async (req, res, next) => {
	let token;

	if (
		req.headers.authorization &&
		req.headers.authorization.startsWith('Bearer')
	) {
		try {
			token = req.headers.authorization.split(' ')[1];
			const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

			req.id = await User.findById(decoded.UserInfo.id).select('-password');

			next();
		} catch (error) {
			console.error(error);
			res.status(401);
			throw new Error('Brak autoryzacji, nieprawidłowy token');
		}
	}

	if (!token) {
		res.status(401);
		throw new Error('Brak autoryzacji, brak tokena ');
	}
});

export { protect };
