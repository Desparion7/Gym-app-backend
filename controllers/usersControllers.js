import User from '../models/User.js';
import Records from '../models/Records.js';
import bcrypt from 'bcrypt';
import validator from 'validator';
import asyncHandler from 'express-async-handler';

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex =
	/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
const saltRounds = 10;

//@desc Create new user
//@route POST /users
//@access Public
export const createNewUser = asyncHandler(async (req, res, next) => {
	// Check for all required data
	if (!req.body.username || !req.body.email || !req.body.password) {
		return res.status(400).json({
			error:
				'Nazwa uzytkownika, email i hasło są wymagane do utworzenia nowego użytkownia.',
		});
	}
	// Validate email
	if (!validator.isEmail(req.body.email)) {
		return res.status(400).json({
			error: 'Emial nie jest poprawny.',
		});
	}
	// Validate password

	if (!passwordRegex.test(req.body.password)) {
		return res.status(400).json({
			error:
				'Hasło musi składać się z 8 znaków i zawierać cyfre oraz znak specjalny.',
		});
	}

	// Check if the email or username already exists in the database
	const existingUserEmail = await User.findOne({ email: req.body.email });
	if (existingUserEmail) {
		return res.status(400).json({
			error: 'Użytkownik o podanym emailu już istnieje.',
		});
	}

	const existingUserName = await User.findOne({
		username: new RegExp(`^${req.body.username}$`, 'i'),
	});
	if (existingUserName) {
		return res.status(400).json({
			error: 'Uzytkownik o podanej nazwie już istnieje.',
		});
	}
	// Hash password
	const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);

	const newUser = {
		username: req.body.username,
		email: req.body.email,
		password: hashedPassword,
	};
	// Save the new user to the database
	const user = await User.create(newUser);
	// Create default records for new user
	const records = await Records.create({ user });

	if (user) {
		res.status(201).json({
			message: `Nowy użytkownik ${req.body.username} został utworzony.`,
		});
	} else {
		res.status(400).json({ message: 'Nieprawidłowe dane.' });
	}
});

//@desc Update user
//@route PATCH /users
//@access Private
export const updateUser = asyncHandler(async (req, res, next) => {
	const { newPassword, newEmail, password } = req.body;
	const user = await User.findOne(req.user);
	if (password !== '') {
		// Compare old password
		const match = await bcrypt.compare(password, user.password);
		if (!match) {
			return res.status(400).json({
				message: 'Brak autoryzacji, niepoprawne hasło.',
			});
		}
	}

	// Check for neede data
	if (!newPassword && !newEmail) {
		return res.status(400).json({
			message: 'Brak danych do zaaktualizowania.',
		});
	}
	// Update Password
	if (newPassword) {
		if (!passwordRegex.test(newPassword)) {
			return res.status(400).json({
				message:
					'Hasło musi składać się z 8 znaków i zawierać jedną cyfre oraz znak specjalny.',
			});
		}
		// hash password
		const hashedPassword = await bcrypt.hash(newPassword, saltRounds);
		user.password = hashedPassword;
		await user.save();

		return res.status(200).json({ message: 'Hasło zostało zmienione.' });
	}
	// updateEmail
	if (newEmail) {
		// Check if the email already exists in the database
		const existingUserEmail = await User.findOne({ email: newEmail });
		if (existingUserEmail) {
			return res.status(400).json({
				message: 'Użytkownik o podanym emailu już istnieje.',
			});
		}
		// Check email
		if (!emailRegex.test(newEmail)) {
			return res.status(400).json({
				message: 'Email jest nieprawidłowy',
			});
		}
		// update email
		user.email = newEmail;
		await user.save();
		return res.status(200).json({ message: 'Email został zmieniony.' });
	}
});
