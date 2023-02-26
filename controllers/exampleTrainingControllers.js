import asyncHandler from 'express-async-handler';
import ExampleTraining from '../models/ExampleTraining.js';

//@desc Get example training by path
//@route GET /exampletraining/:path
//@access Public
export const getExampleTraining = asyncHandler(async (req, res, next) => {
	// Search for training
	const exampleTraining = await ExampleTraining.findOne({
		path: req.params.path,
	}).exec();

	if (!exampleTraining) {
		return res.status(400).json({
			error: 'Nie znaleziono treningu o podanym id',
		});
	}

	res.json(exampleTraining);
});
