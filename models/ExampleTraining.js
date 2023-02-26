import mongoose from 'mongoose';

const exerciseSchema = mongoose.Schema({
	name: { type: String, required: false },
	repeat: { type: Number, required: false },
	time: { type: String, required: false },
	weight: { type: Number, required: false },
	url: { type: String, require: false },
});

const exampleTrainingSchema = mongoose.Schema({
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
	path: {
		type: String,
		require: false,
	},
});

const ExampleTraining = mongoose.model(
	'ExampleTraining',
	exampleTrainingSchema
);

export default ExampleTraining;
