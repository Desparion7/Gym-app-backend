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
	{ recordName: 'Maksymalna ilość pompek', recordAmount: '0 razy' },
	{
		recordName: 'Maksymalna ilość podciągnieć na drążku nachwytem',
		recordAmount: '0 razy',
	},
	{ recordName: 'Plank', recordAmount: '0 min' },
	{
		recordName: 'Maksymalny ciężar-wyciskanie na klatke',
		recordAmount: '0 kg',
	},
	{
		recordName: 'Maksymalny ciężar na martwym ciągu',
		recordAmount: '0 kg',
	},
	{
		recordName: 'Czas wiszenia na drążku',
		recordAmount: '0 min',
	},
	{
		recordName: 'Czas na 100m',
		recordAmount: '0 min',
	},
	{
		recordName: 'Czas półmaratonu',
		recordAmount: '0 h',
	},
	{
		recordName: 'Czas maratonu',
		recordAmount: '0 h',
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
