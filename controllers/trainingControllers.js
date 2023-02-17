import asyncHandler from 'express-async-handler';
import Training from '../models/Training.js';

//@desc Create new training
//@route POST /training
//@access Private
export const createNewTraining = asyncHandler(async (req, res, next) => {
	// Check for all required data
	const { newTraining } = req.body.initialTrainingData;

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

//@desc Get training by Id
//@route GET /training:id
//@access Private
export const getTrainingById = asyncHandler(async (req, res, next) => {
	// Search for training by ID
	const training = await Training.findById(req.params.id);
	if (training) {
		res.json(training);
	} else {
		return res.status(400).json({
			error: 'Nie znaleziono treningu o podanym id',
		});
	}
});
