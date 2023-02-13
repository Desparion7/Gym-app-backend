import User from '../models/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';

//@desc Login
//@route POST /auth
//@access Public
export const login = asyncHandler(async (req, res) => {
	const { email, username, password } = req.body;
	// Check for all required data
	if ((!username && !email) || !password) {
		return res
			.status(400)
			.json({ message: 'Login(email) i hasło są wymagane' });
	}
	// Check with date user use to login
	let user;
	if (email) {
		user = await User.findOne({ email });
	} else {
		user = await User.findOne({ username });
	}
	if (!user) {
		return res.status(401).json({ message: 'Nieprawidłowy login lub hasło' });
	}
	// CHeck password
	const match = await bcrypt.compare(password, user.password);
	if (!match) {
		return res.status(401).json({ message: 'Brak autoryzacji' });
	}
	// Generate acces and refresh token
	const accessToken = jwt.sign(
		{
			UserInfo: {
				username: user.username,
				isAdmin: user.isAdmin,
			},
		},
		process.env.ACCESS_TOKEN_SECRET,
		{ expiresIn: '30m' }
	);
	const refreshToken = jwt.sign(
		{
			username: user.username,
		},
		process.env.REFRESH_TOKEN_SECRET,
		{ expiresIn: '7d' }
	);
	// create scure cookie with refresh token
	res.cookie('jwt', refreshToken, {
		httpOnly: true, // accessible only by web server
		secure: true, //https
		sameSite: 'None', //corss-site cookie
		maxAge: 7 * 24 * 60 * 60 * 100, // cookie expiry: set to match rT
	});
	// Send accessToken containing username and isAdmin
	res.json({ accessToken });
});

//@desc Refresh
//@route GET /auth/refresh
//@access Public- because access token has expired
export const refresh = asyncHandler(async (req, res) => {
	const cookies = req.cookies;
	if (!cookies?.jwt)
		return res.status(401).json({ message: 'Brak autoryzacji' });

	const refreshToken = cookies.jwt;

	jwt.verify(
		refreshToken,
		process.env.REFRESH_TOKEN_SECRET,
		asyncHandler(async (err, decoded) => {
			if (err) return res.status(403).json({ message: 'Dostęp zabroniony' });

			const user = await User.findOne({ username: decoded.username });

			if (!user) return res.status(401).json({ message: 'Brak autoryzacji' });

			const accessToken = jwt.sign(
				{
					UserInfo: {
						username: user.username,
						roles: user.isAdmin,
					},
				},
				process.env.ACCESS_TOKEN_SECRET,
				{ expiresIn: '30m' }
			);

			res.json({ accessToken });
		})
	);
});

//@desc Logout
//@route POST /auth/logout
//@access Public- just to clear cookie if exists
export const logout = asyncHandler(async (req, res) => {
	const cookies = req.cookies;
	if (!cookies?.jwt) return res.sendStatus(204); //No content
	res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true });
	res.json({ message: 'Cookie wyczyszczone' });
});
