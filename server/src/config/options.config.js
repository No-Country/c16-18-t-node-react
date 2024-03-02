import dotenv from 'dotenv';
dotenv.config();

//configuracion de env para las variables importantes
const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;
const SECRET_KEY = process.env.SECRET_KEY;
const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD;
const EMAIL_HOST = process.env.EMAIL_HOST;
const EMAIL_PORT = process.env.EMAIL_PORT;

// objeto de las variables de entorno
export const options = {
	server: {
		port: PORT,
	},
	mongo: {
		url: MONGO_URL,
	},
	token: {
		secretKey: SECRET_KEY,
	},
	nodemailer:{
		emailUser: EMAIL_USER,
		emailPass: EMAIL_PASSWORD,
		emailHost: EMAIL_HOST,
		emailPort: EMAIL_PORT
	},
	collections:{
		businessCollection: "business",
		ordersCollection: "orders",
		usersCollection: "users",
		productsCollection: "products",
		productTypeCollection: "productType"
	}
};
