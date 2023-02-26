import mongoose from 'mongoose';

const exerciseSchema = mongoose.Schema({
	name: { type: String, required: false },
	repeat: { type: Number, required: false },
	time: { type: Boolean, required: false },
	weight: { type: Number, required: false },
	url: { type: String, require: false },
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
	trainingName: {
		type: String,
		require: true,
	},
	trainingDate: {
		type: Date,
		required: true,
	},
	timeStart: {
		type: String,
		required: false,
	},
	timeEnd: {
		type: String,
		required: false,
	},
	traininglength: {
		type: String,
		required: false,
	},
});

const Training = mongoose.model('Training', trainingSchema);

export default Training;
