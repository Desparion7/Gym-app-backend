import asyncHandler from 'express-async-handler';
import TrainingSet from '../models/TrainingSet.js';

//@desc Create new set
//@route POST /set
//@access Private
export const createNewTrainingSet = asyncHandler(async (req, res, next) => {
	// Check for all required data
	const exercise = req.body.exercise;
	const trainingName = req.body.trainingName;
	if (!exercise) {
		return res.status(400).json({
			error: 'Nie wysłano tabeli treningu',
		});
	}
	if (!trainingName) {
		return res.status(400).json({
			error: 'Nie wysłano nazwy treningu',
		});
	}
	// Create new set
	const trainingSet = new TrainingSet({
		user: req.user,
		exercise,
		trainingName,
	});

	const createdNewTrainingSet = await trainingSet.save();
	res.status(201).json(createdNewTrainingSet);
});

//@desc Get users all sets
//@route GET /set
//@access Private
export const getUserTrainingSets = asyncHandler(async (req, res, next) => {
	// Search for user sets
	const trainingSets = await TrainingSet.find({ user: req.user._id }).exec();

	if (!trainingSets) {
		return res.status(400).json({
			error: 'Nie znaleziono żadnego zestawu',
		});
	}
	trainingSets.sort((a, b) => b - a);

	res.json(trainingSets);
});

//@desc Get users set by Id
//@route GET /set/:id
//@access Private
export const getTrainingSetById = asyncHandler(async (req, res, next) => {
	const trainingSet = await TrainingSet.findById(req.params.id).exec();

	const id1 = req.user._id;
	const id2 = trainingSet.user;

	if (!trainingSet) {
		return res.status(400).json({
			error: 'Nie znaleziono zestwu o podanym id',
		});
	}
	if (id1.equals(id2)) {
		res.json(trainingSet);
	} else {
		return res.status(400).json({
			error: 'Dany plan treningowy przypisany jest do innego użytkownika',
		});
	}
});

//@desc Update training set by Id
//@route PATCH /set:id
//@access Private
export const updateTrainingSet = asyncHandler(async (req, res, next) => {
	const { exercise, trainingName } = req.body;
	

	// Search for training by ID
	const trainingSet = await TrainingSet.findById(req.params.id).exec();
	if (!trainingSet) {
		return res.status(400).json({
			error: 'Nie znaleziono zestwu o podanym id',
		});
	}
	//Update training exercise and name
	if (exercise) {
		await TrainingSet.findByIdAndUpdate(req.params.id, {
			exercise,
		}).exec();
	}
	if (trainingName) {
		await TrainingSet.findByIdAndUpdate(req.params.id, {
			trainingName,
		}).exec();
	}

	res.json({ message: 'Trening został zaaktualizowany' });
});

//@desc Delete set
//@route Delete /set/:id
//@access Private
export const deleteTrainingSet = asyncHandler(async (req, res, next) => {
	const trainingSet = await TrainingSet.findById(req.params.id).exec();
	if (!trainingSet) {
		return res.status(400).json({
			error: 'Nie znaleziono zestawu o podanym id',
		});
	}
	//Delete set
	await trainingSet.deleteOne();
	res.json({ message: 'Zestaw został pomyślnie usunięty' });
});
