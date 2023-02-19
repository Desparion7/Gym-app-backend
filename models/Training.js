import mongoose from 'mongoose';

const exerciseSchema = mongoose.Schema({
	name: { type: String, required: false },
	repeat: { type: Number, required: false },
	time: { type: String, required: false },
	weight: { type: Number, required: false },
});

const trainingSchema = mongoose.Schema({
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
	trainingDate: {
		type: Date,
		required: true,
	},
});

const Training = mongoose.model('Training', trainingSchema);

export default Training;
