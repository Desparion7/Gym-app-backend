import asyncHandler from 'express-async-handler';
import Training from '../models/Training.js';

//@desc Create new training
//@route POST /training
//@access Private
export const createNewTraining = asyncHandler(async (req, res, next) => {
	// Check for all required data
	const exercise = req.body.emptyTraining;
	console.log(req.body);
	if (!exercise) {
		return res.status(400).json({
			error: 'Nie wysłano tabeli treningu',
		});
	}
	// Create new training day
	const training = new Training({
		user: req.user,
		exercise: exercise,
	});

	const createdNewTraining = await training.save();
	res.status(201).json(createdNewTraining);
});

//@desc Get users all trainings
//@route GET /training
//@access Private
export const getUserTrainings = asyncHandler(async (req, res, next) => {
	// Search for user trainings
	const trainings = await Training.find(req.user._id).exec();
	if (!trainings) {
		return res.status(400).json({
			error: 'Nie znaleziono żadnego treningu',
		});
	}
	res.json(trainings);
});

//@desc Get training by Id
//@route GET /training:id
//@access Private
export const getTrainingById = asyncHandler(async (req, res, next) => {
	// Search for training by ID
	const training = await Training.findById(req.params.id).exec();

	const id1 = req.user._id;
	const id2 = training.user;

	if (!training) {
		return res.status(400).json({
			error: 'Nie znaleziono treningu o podanym id',
		});
	}

	if (id1.equals(id2)) {
		res.json(training);
	} else {
		return res.status(400).json({
			error: 'Dany plan treningowy przypisany jest do innego użytkownika',
		});
	}
});

//@desc Update training by Id
//@route PATCH /training:id
//@access Private
export const updateTraining = asyncHandler(async (req, res, next) => {
	const { exercise } = req.body;
	// Search for training by ID
	const training = await Training.findById(req.params.id).exec();
	if (!training) {
		return res.status(400).json({
			error: 'Nie znaleziono treningu o podanym id',
		});
	}
	//Update training
	await Training.findByIdAndUpdate(req.params.id, {
		exercise: exercise,
	}).exec();

	const newTraining = await Training.findById(req.params.id).exec();
	res.json(newTraining);
});
