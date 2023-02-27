import mongoose from 'mongoose';

const exerciseSchema = mongoose.Schema({
	name: { type: String, required: false },
	repeat: { type: Number, required: false },
	time: { type: String, required: false },
	weight: { type: Number, required: false },
	url: { type: String, require: false },
});

const TrainingSetSchema = mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: 'User',
	},
	exercise: {
		type: [
			{
				type: [exerciseSchema],
			},
		],
		required: true,
	},
	trainingName: {
		type: String,
		require: true,
	},
});

const TrainingSet = mongoose.model('TrainingSet', TrainingSetSchema);

export default TrainingSet;
