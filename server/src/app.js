import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { options } from "./config/options.config.js";
import mongoose from "mongoose";
import productsRouter from "./routes/products.router.js"

const app = express();

app.listen(options.server.port, () => {
    console.log(`Server listening on port: ${options.server.port}`);
  });

mongoose.connect(options.mongo.url).then((conn) => {
    console.log("Connected to DB!");
  });
  

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use("/api/products", productsRouter);

export default app;
