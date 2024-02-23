import bcrypt from 'bcryptjs';
import usersModel from '../models/users.model.js';
import { createAccessToken } from '../helpers/utils/jwt.utils.js';

export const register = async (req, res) => {
	try {
		const { email, username, rol, password } = req.body;

		const userFound = await usersModel.findOne({ email });
		if (userFound) return res.status(400).json(['The email is already in use']);

		const passwordHash = await bcrypt.hash(password, 10);
		const newUser = new usersModel({
			username,
			email,
			rol,
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
			username: userSaved.username,
			email: userSaved.email,
			rol: userSaved.rol,
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
		const userFound = await usersModel.findOne({ email });
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

// esto es solo para verificar que se cargaron los datos, no va aqui
/* export const getUsers = async (req, res) => {
	const users = await usersModel.find();
	res.json(users);
};
 */
