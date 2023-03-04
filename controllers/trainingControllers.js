import asyncHandler from 'express-async-handler';
import Training from '../models/Training.js';

//@desc Create new training
//@route POST /training
//@access Private
export const createNewTraining = asyncHandler(async (req, res, next) => {
	// Check for all required data
	const exercise = req.body.exercise;
	const trainingDate = req.body.trainingDate;
	const trainingName = req.body.trainingName;
	if (!exercise) {
		return res.status(400).json({
			error: 'Nie wysłano tabeli treningu',
		});
	}
	// Create new training day
	const training = new Training({
		user: req.user,
		exercise,
		trainingDate,
		trainingName,
	});

	const createdNewTraining = await training.save();
	res.status(201).json(createdNewTraining);
});

//@desc Get users all trainings
//@route GET /training
//@access Private
export const getUserTrainings = asyncHandler(async (req, res, next) => {
	const pageSize = 10;
	const page = Number(req.query._page) || 1;
	// Search for user trainings
	const trainingsList = await Training.find({ user: req.user._id });

	if (!trainingsList) {
		return res.status(400).json({
			error: 'Nie znaleziono żadnego treningu',
		});
	}
	const count = await Training.countDocuments({ user: req.user._id });

	trainingsList.sort(
		(a, b) => new Date(b.trainingDate) - new Date(a.trainingDate)
	);
	const trainings = trainingsList.slice(
		(page - 1) * 10,
		(page - 1) * 10 + pageSize
	);

	res.json({ trainings, page, pages: Math.ceil(count / pageSize) });
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
	const { exercise, trainingDate, trainingName, timeStart, timeEnd } = req.body;

	// Search for training by ID
	const training = await Training.findById(req.params.id).exec();
	if (!training) {
		return res.status(400).json({
			error: 'Nie znaleziono treningu o podanym id',
		});
	}
	//Update training exercise
	if (exercise) {
		await Training.findByIdAndUpdate(req.params.id, {
			exercise,
		}).exec();
	}
	if (trainingDate) {
		await Training.findByIdAndUpdate(req.params.id, {
			trainingDate,
		}).exec();
	}
	if (trainingName) {
		await Training.findByIdAndUpdate(req.params.id, {
			trainingName,
		}).exec();
	}
	if (timeStart) {
		await Training.findByIdAndUpdate(req.params.id, {
			timeStart,
		}).exec();
	}
	if (timeEnd) {
		await Training.findByIdAndUpdate(req.params.id, {
			timeEnd,
		}).exec();
	}
	if (timeStart && timeEnd) {
		const [hours1, minutes1] = timeStart.split(':');
		const [hours2, minutes2] = timeEnd.split(':');
		const totalMinutes1 = hours1 * 60 + parseInt(minutes1);
		const totalMinutes2 = hours2 * 60 + parseInt(minutes2);
		const traininglength = totalMinutes2 - totalMinutes1;
		await Training.findByIdAndUpdate(req.params.id, {
			traininglength,
		}).exec();
	}
	res.json({ message: 'Trening został zaaktualizowany' });
});

//@desc Update training by Id
//@route PATCH /training:id
//@access Private
export const deleteTraining = asyncHandler(async (req, res, next) => {
	// Search for training by ID
	const training = await Training.findById(req.params.id).exec();

	if (!training) {
		return res.status(400).json({
			error: 'Nie znaleziono treningu o podanym id',
		});
	}
	//Delete training
	await training.deleteOne();

	res.json({ message: 'Trening został pomyślnie usunięty' });
});
