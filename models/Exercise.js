import mongoose from 'mongoose';

const exerciseSchema = mongoose.Schema({
	exerciseName: { type: String, required: true },
	imgPath: { type: String, required: true },
	url: { type: String, required: true },
	muscle1: [],
	muscle2: [],
	videoUrl: [],
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

export default Exercise;
