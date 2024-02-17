import dotenv from 'dotenv';
dotenv.config();

//configuracion de env para las variables importantes
const PORT = process.env.PORT
const MONGO_URL = process.env.MONGO_URL
const SECRET_KEY = process.env.SECRET_KEY
const PERSISTENCE = process.env.PERSISTENCE;

// objeto de las variables de entorno
export const options = { 
    server:{
        port: PORT,
    },
    mongo:{
        url: MONGO_URL,
    },
    token:{
        secretKey: SECRET_KEY,
    }
}