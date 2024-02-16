import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { options } from "./config/options.config.js";
import { MongooseDB } from "./dao/db/mongo.db.js";
import productsRouter from "./routes/products.router.js"

const app = express();

app.listen(options.server.port, () => {
    console.log(`Server listening on port: ${options.server.port}`);
  });

MongooseDB.getInstance();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use("/api/products", productsRouter);

export default app;
