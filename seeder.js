import dotenv from 'dotenv';
import exercises from './data/exercise.js';
import Exercise from './models/Exercise.js';
import connectDB from './config/db.js';

dotenv.config();
connectDB();

const importData = async () => {
	try {
		await Exercise.deleteMany();

		await Exercise.insertMany(exercises);

		console.log('Data Imported');
		process.exit();
	} catch (error) {
		console.error(`${error}`);
		process.exit(1);
	}
};

importData();
