import User from '../models/User.js';
import bcrypt from 'bcrypt';
import validator from 'validator';
import asyncHandler from 'express-async-handler';

//@desc Create new user
//@route POST /users
//@access Public
export const createNewUser = asyncHandler(async (req, res, next) => {
	// Check for all required data
	if (!req.body.username || !req.body.email || !req.body.password) {
		return res.status(400).json({
			error:
				'Nazwa uzytkownika, email i hasło są wymagane do utworzenia nowego użytkownia',
		});
	}
	// Validate email
	if (!validator.isEmail(req.body.email)) {
		return res.status(400).json({
			error: 'Emial nie jest poprawny',
		});
	}
	// Validate password
	const passwordRegex =
		/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

	if (!passwordRegex.test(req.body.password)) {
		return res.status(400).json({
			error:
				'Hasło musi składać się z 8 znaków i zawierać jedną dużą litere, cyfre oraz znak specjalny.',
		});
	}

	// Check if the email or username already exists in the database
	const existingUserEmail = await User.findOne({ email: req.body.email });
	if (existingUserEmail) {
		return res.status(400).json({
			error: 'Użytkownik o podanym emailu już istnieje',
		});
	}

	const existingUserName = await User.findOne({
		username: new RegExp(`^${req.body.username}$`, 'i'),
	});
	if (existingUserName) {
		return res.status(400).json({
			error: 'Uzytkownik o podanej nazwie już istnieje',
		});
	}
	// Hash password
	const saltRounds = 10;
	const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);

	const newUser = {
		username: req.body.username,
		email: req.body.email,
		password: hashedPassword,
	};
	// Save the new user to the database
	const user = await User.create(newUser);

	if (user) {
		res.status(201).json({
			message: `Nowy użytkownik ${req.body.username} został utworzony`,
		});
	} else {
		res.status(400).json({ message: 'Nieprawidłowe dane' });
	}
});
