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
