import dotenv from 'dotenv';
dotenv.config();

//configuracion de env para las variables importantes
const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;
const SECRET_KEY = process.env.SECRET_KEY;
const EMAIL_USER = process.env.EMAIL_USER
const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD
const SERVER_URL = process.env.SERVER_URL


// objeto de las variables de entorno
export const options = {
	server: {
		port: PORT,
		url: SERVER_URL
	},
	mongo: {
		url: MONGO_URL,
	},
	token: {
		secretKey: SECRET_KEY,
	},
	nodemailer:{
		userEmail: EMAIL_USER,
		passwordEmail: EMAIL_PASSWORD
	}
};
