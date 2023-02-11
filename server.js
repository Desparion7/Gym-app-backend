import express from 'express';
import path from 'path';
import mainRouter from './routes/root.js';
import { logger, logEvents } from './middleware/logger.js';
import errorHandler from './middleware/errorHandler.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import corsOptions from './config/corsOptions.js';

const app = express();
const PORT = process.env.PORT || 3000;
const __dirname = path.resolve();

app.use(logger);

app.use(cors(corsOptions));

app.use(express.json());

app.use(cookieParser());

app.use('/', express.static(path.join(__dirname, 'public')));
app.use('/', mainRouter);

app.all('*', (req, res) => {
	res.status(404);

	if (req.accepts('html')) {
		res.sendFile(path.join(__dirname, 'views', '404.html'));
	} else if (req.accepts('json')) {
		res.json({ message: '404 Not Found' });
	} else {
		res.type('txt').send('404 Not Found');
	}
});
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on port ${PORT} `));

// mongoose.connection.on('error', (err) => {
// 	console.log(err);
// 	logEvents(
// 		`${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`,
// 		'mongoErrLog.log'
// 	);
// });