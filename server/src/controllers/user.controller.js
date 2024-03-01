import userService from '../services/user.service.js';

export const getUsers = async (req, res) => {
	try {
		const users = await userService.getUsers();
		res.send({ status: 'ok', payload: users });
	} catch (error) {
		res.status(400).send({ status: 'error', payload: error.message });
	}
};

export const getUserById = async (req, res) => {
	try {
		/* 	if (req.user.rol !== 'admin') {
			return res.status(403).send({
				status: 'error',
				payload: 'You do not have permission to perform this action',
			});
		} */
		const user = await userService.getUsersById(req.params.uid);
		res.status(200).send({ status: 'ok', payload: user });
	} catch (error) {
		res.status(400).send({ status: 'error', payload: error.message });
	}
};

export const createUser = async (req, res) => {
	try {
		const result = await userService.createUser(req.body);
		res.status(201).send({ status: 'ok', payload: result });
	} catch (error) {
		res.status(400).send({ status: 'error', payload: error.message });
	}
};

export const updateUser = async (req, res) => {
	const { uid } = req.params;

	try {
		const userUpdate = await userService.updateUser(uid, req.body);
		res.status(200).send({ status: 'ok', payload: userUpdate });
	} catch (error) {
		console.log(error.message);
		throw new Error('Error al actualizar el usuario');
	}
};

export const deleteUser = async (req, res) => {
	try {
		await userService.deleteUser(req.params.uid);
		res.send({ status: 'success', payload: 'Deleted user' });
	} catch (error) {
		res.status(500).send({ status: 'error', payload: error.message });
	}
};
