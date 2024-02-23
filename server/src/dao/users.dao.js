import usersModel from '../models/users.model.js';

export default class UsersDAO {
	get = () => {
		return usersModel.find();
	};

	getById = (params) => {
		return usersModel.findById(params);
	};

	save = (doc) => {
		return usersModel.create(doc);
	};

	update = (id, doc) => {
		return usersModel.findByIdAndUpdate(id, { $set: doc });
	};

	delete = (id) => {
		return usersModel.findByIdAndDelete(id);
	};
}
