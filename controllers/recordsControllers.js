import asyncHandler from 'express-async-handler';
import Records from '../models/Records.js';
import { ObjectId } from 'mongodb';

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
//@desc create new record
//@route POST /record
//@access Private
export const createNewRecord = asyncHandler(async (req, res, next) => {
	const { recordName, recordAmount } = req.body;
	if (!recordName || !recordAmount) {
		return res.status(400).json({
			error: 'Braku niezbędnych danych do utworzenia nowego rekordu',
		});
	}
	const records = await Records.find({ user: req.user._id }).exec();
	if (!records) {
		return res.status(400).json({
			error: 'Nie znaleziono rekordu o podanym id',
		});
	}

	const newRecord = { recordName, recordAmount };
	await Records.findOneAndUpdate(
		{
			user: req.user._id,
		},
		{ $push: { records: newRecord } }
	);
	res.json({ message: 'Rekord został zaaktualizowany' });
});
//@desc Update record by Id
//@route PATCH /record:id
//@access Private
export const updateRecords = asyncHandler(async (req, res, next) => {
	const { recordValue } = req.body;
	const id = req.params.id;

	// Search for user records by ID
	const records = await Records.find({ user: req.user._id }).exec();

	if (!records) {
		return res.status(400).json({
			error: 'Nie znaleziono rekordu o podanym id',
		});
	}
	// Upadte
	await Records.findOneAndUpdate(
		{
			user: req.user._id,
			'records._id': new ObjectId(`${id}`),
		},
		{ $set: { 'records.$.recordAmount': recordValue } }
	);

	res.json({ message: 'Rekord został zaaktualizowany' });
});
//@desc Delete Record
//@route DELETE /record:id
//@access Private
export const deleteRecord = asyncHandler(async (req, res, next) => {
	// Search for record by ID
	const records = await Records.find({ user: req.user._id }).exec();
	const id = req.params.id

	if (!records) {
		return res.status(400).json({
			error: 'Nie znaleziono recordu o podanym id',
		});
	}
	//Delete record
	await Records.findOneAndUpdate(
		{
			user: req.user._id,
			'records._id': id,
		},
		{
			$pull: { records: { _id: id } },
		}
	);

	res.json({ message: 'Rekord został pomyślnie usunięty' });
});
