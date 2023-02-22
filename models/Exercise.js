import mongoose from 'mongoose';

const exerciseSchema = mongoose.Schema({
	exerciseName: { type: String, required: true },
	imgPath: { type: String, required: true },
	url: { type: String, required: true },
	videoUrl: [],
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

export default Exercise;
