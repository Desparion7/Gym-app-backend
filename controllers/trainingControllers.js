import asyncHandler from 'express-async-handler';
import Training from '../models/Training.js';

//@desc Create new training
//@route POST /training
//@access Private
export const createNewTraining = asyncHandler(async (req, res, next) => {
	// Check for all required data
	const { newTraining } = req.body;
	if (!newTraining) {
		return res.status(400).json({
			error: 'Nie wysłano tabeli treningu',
		});
	}
	// Create new training day
	const training = new Training({
		user: req.id,
		exercise: newTraining,
	});

	const createdNewTraining = await training.save();
	res.status(201).json(createdNewTraining);
});
