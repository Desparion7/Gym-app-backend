import asyncHandler from 'express-async-handler';
import Exercise from '../models/Exercise.js';

//@desc Get exercise by url
//@route GET /exercise:url
//@access Public
export const getExercise = asyncHandler(async (req, res, next) => {
	// Search for exercise
	const exercise = await Exercise.findOne({ url: req.params.url }).exec();

	if (!exercise) {
		return res.status(400).json({
			error: 'Nie znaleziono treningu o podanym id',
		});
	}

	res.json(exercise);
});
