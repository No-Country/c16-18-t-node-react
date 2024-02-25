import UsersDAO from '../dao/user.dao.js';

const usersDAO = new UsersDAO();

const getUsers = async () => {
	try {
		const result = usersDAO.get();
		return result;
	} catch (error) {
		throw new Error(error.message);
	}
};

const getUsersById = async (id) => {
	try {
		const result = usersDAO.getById(id);
		return result;
	} catch (error) {
		throw new Error(error.message);
	}
};

const createUser = async (id, user) => {
	try {
		const result = usersDAO.save(id, user);
		return result;
	} catch (err) {
		throw new Error(err.message);
	}
};

const updateUser = async (id, user) => {
	try {
		const result = usersDAO.update(id, user);
		return result;
	} catch (error) {
		throw new Error(err.message);
	}
};
const deleteUser = async (id) => {
	try {
		const result = usersDAO.delete(id);
		return result;
	} catch (error) {
		throw new Error(err.message);
	}
};

export default {
	getUsers,
	getUsersById,
	createUser,
	updateUser,
	deleteUser,
};
