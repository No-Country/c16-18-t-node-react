import mongoose from "mongoose";
import { ordersCollection } from "../config/collections.config.js";

const businessSchema = new mongoose.Schema({
    nombre: String,
    productos:[]
});

export const businessModel = mongoose.model(ordersCollection, businessSchema);