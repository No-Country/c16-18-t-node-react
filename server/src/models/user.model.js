import mongoose from 'mongoose';
import { usersCollection, ordersCollection } from '../config/collections.config.js';

const usersSchema = new mongoose.Schema(
	{
		username: { type: String, required: true, trim: true },
		email: { type: String, unique: true, required: true },
		password: { type: String, required: true },
		rol: String,
		pedidos: [
			{
				type: mongoose.SchemaTypes.ObjectId,
				ref: ordersCollection,
			},
		],
	},
	{ timestamps: true }
);

const userModel = mongoose.model(usersCollection, usersSchema);
export default userModel;