import mongoose from "mongoose";
import { options } from "../config/options.config.js";

const ordersSchema = new mongoose.Schema({
  numeroOrden: String,
  negocio: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: options.collections.businessCollection,
  },
  usuario: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: options.collections.usersCollection,
  },
  products: [],
  precioTotal: Number,
  estado: {
    type: String,
    enum: ["pendiente", "completado", "cancelado"],
    default: "pendiente",
  },
});

const orderModel = mongoose.model(options.collections.ordersCollection, ordersSchema);
export default orderModel;
