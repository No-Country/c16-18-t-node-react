import bcrypt from 'bcryptjs';
import userModel from '../models/user.model.js';
import { createAccessToken } from '../helpers/utils/jwt.utils.js';

export const register = async (req, res) => {
	try {
		const { email, name, lastname, rol, password, confirmPassword, avatar } =
			req.body;

		const userFound = await userModel.findOne({ email });
		if (userFound) return res.status(400).json(['The email is already in use']);

		if (password !== confirmPassword) {
			return res.status(400).json({ message: 'Passwords do not macth!' });
		}

		const passwordHash = await bcrypt.hash(password, 10);
		const newUser = new userModel({
			name,
			lastname,
			email,
			rol,
			avatar,
			password: passwordHash,
		});

		const userSaved = await newUser.save();
		const token = await createAccessToken({
			id: userSaved._id,
			email: userSaved.email,
			rol: userSaved.rol,
		});

		res.cookie('token', token);

		res.json({
			id: userSaved._id,
			name: userSaved.name,
			lastname: userSaved.lastname,
			email: userSaved.email,
			rol: userSaved.rol,
			avatar: userSaved.avatar,
			createdAt: userSaved.createdAt,
			updatedAt: userSaved.updatedAt,
		});
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

export const login = async (req, res) => {
	const { email, rol, password } = req.body;

	try {
		const userFound = await userModel.findOne({ email });
		if (!userFound) return res.status(400).json({ message: 'User not found' });

		const isMatch = await bcrypt.compare(password, userFound.password);
		if (!isMatch) return res.status(400).json({ message: 'Incorrect credentials' });

		const token = await createAccessToken({
			id: userFound._id,
			email: userFound.email,
			rol: userFound.rol,
		});

		res.cookie('token', token);

		res.json({
			id: userFound._id,
			username: userFound.username,
			email: userFound.email,
			rol: userFound.rol,
			avatar: userFound.avatar,
			createdAt: userFound.createdAt,
			updatedAt: userFound.updatedAt,
		});
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

export const logout = (req, res) => {
	res.cookie('token', '', {
		expires: new Date(0),
	});
	return res.sendStatus(200);
};
