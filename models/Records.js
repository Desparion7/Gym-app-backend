import mongoose from 'mongoose';

const recordSchema = mongoose.Schema({
	recordName: {
		type: String,
		require: true,
	},
	recordAmount: {
		type: String,
		required: true,
	},
});
const initialRecords = [
	{ recordName: 'Maksymalna ilość pompek', recordAmount: '0' },
	{
		recordName: 'Maksymalna ilość podciągnieć na drążku nachwytem',
		recordAmount: '0',
	},
	{ recordName: 'Plank', recordAmount: '0' },
	{
		recordName: 'Maksymalny ciężar-wyciskanie na klatke',
		recordAmount: '0',
	},
];

const recordsSchema = mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: 'User',
	},
	records: {
		type: [recordSchema],
		required: true,
		default: initialRecords,
	},
});

const Records = mongoose.model('Records', recordsSchema);

export default Records;
