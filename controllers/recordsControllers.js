import asyncHandler from 'express-async-handler';
import Records from '../models/Records.js';

//@desc Get all records
//@route GET /records
//@access Private
export const getUserRecords = asyncHandler(async (req, res, next) => {
	// Search for user trainings
	const records = await Records.findOne({ user: req.user._id });

	if (!records) {
		return res.status(400).json({
			error: 'Nie znaleziono żadnego rekordów',
		});
	}
	res.json(records);
});
