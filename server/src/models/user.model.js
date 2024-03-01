import mongoose from 'mongoose';
import { usersCollection, ordersCollection } from '../config/collections.config.js';

const defaultAvatars = {
	cliente:
		'https://img.freepik.com/vector-gratis/ilustracion-concepto-contactanos_114360-1850.jpg?t=st=1709323422~exp=1709327022~hmac=5341baa09af167920eaa2b930b6dbe363d25e229a4576ce4305b6fed76acf4c2&w=740',
	vendedor:
		'https://img.freepik.com/vector-premium/vendedor-ambulante-frutas-verduras_107173-7978.jpg?w=740',
	admin:
		'https://img.freepik.com/vector-gratis/seleccion-ilustracion-concepto-equipo_114360-5373.jpg?t=st=1709323531~exp=1709327131~hmac=ddfbef85d4a33674f2cfc3491c71ee7710e2826f5c9553a70d7fbfa02f127557&w=740',
};

const usersSchema = new mongoose.Schema(
	{
		name: { type: String, required: true, trim: true },
		lastname: { type: String, required: true, trim: true },
		email: { type: String, unique: true, required: true },
		password: { type: String, required: true },
		rol: {
			type: String,
			enum: ['Cliente', 'Vendedor', 'Admin'],
			default: 'Cliente',
		},
		avatar: {
			type: String,
			default: function () {
				return defaultAvatars[this.rol];
			},
		},
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
