import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';

import { options } from './config/options.config.js';
import productsRouter from './routes/products.router.js';
import authRouter from './routes/auth.router.js';
import usersRouter from './routes/users.router.js';

const app = express();

app.listen(options.server.port, () => {
	console.log(`Server listening on port: ${options.server.port}`);
});

mongoose.connect(options.mongo.url).then((conn) => {
	console.log('MongoDB conectado');
});

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(morgan('dev'));

app.use('/api/products', productsRouter);
app.use('/api', authRouter);
app.use('/api', usersRouter);

export default app;
