import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import { options } from './config/options.config.js';
import productTypeRouter from './routes/productType.router.js';
import productRouter from './routes/product.router.js';
import orderRouter from './routes/order.router.js';
import authRouter from './routes/auth.router.js';
import usersRouter from './routes/user.router.js';
import bussinesRouter from './routes/bussines.router.js';

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

app.use("/api/productType", productTypeRouter);
app.use("/api/bussines", bussinesRouter);
app.use('/api/products', productRouter);
app.use('/api/orders', orderRouter);
app.use('/api', authRouter);
app.use('/api', usersRouter);

export default app;
