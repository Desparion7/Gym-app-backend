import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const mainRouter = express.Router();

const __dirname = dirname(fileURLToPath(import.meta.url));

mainRouter.get('^/$|/index(.html)?', (req, res) => {
	res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
});

export default mainRouter;
