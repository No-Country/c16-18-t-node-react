import mongoose from "mongoose";
import {
  businessCollection,
  usersCollection,
  ordersCollection,
} from "../config/collections.config.js";

const ordersSchema = new mongoose.Schema({
  numeroOrden: String,
  negocio: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: businessCollection,
  },
  usuario: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: usersCollection,
  },
  products: [],
  precioTotal: Number,
  estado: {
    type: String,
    enum: ["pendiente", "completado", "cancelado"],
    default: "pendiente",
  },
});

const orderModel = mongoose.model(ordersCollection, ordersSchema);
export default orderModel;
