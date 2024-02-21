
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import mongoose from 'mongoose';
import { options } from './config/options.config.js';
import productRouter from './routes/product.router.js';
import orderRouter from './routes/order.router.js'
import authRouter from './routes/auth.router.js';
import bussinesRouter from "./routes/bussines.router.js";

const app = express();

app.listen(options.server.port, () => {
  console.log(`Server listening on port: ${options.server.port}`);
});

mongoose.connect(options.mongo.url).then((conn) => {
  console.log("MongoDB conectado");
});

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/bussines", bussinesRouter);
app.use('/api/products', productRouter);
app.use('/api/orders', orderRouter);
app.use('/api', authRouter);

export default app;
