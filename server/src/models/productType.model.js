import mongoose from "mongoose";
import { options } from "../config/options.config.js";

const productTypeSchema = new mongoose.Schema({
  name: {type: String,required: true,},
  enabled: { type: Boolean, default: true },
},);


const productTypeModel = mongoose.model(options.collections.productTypeCollection, productTypeSchema);
export default productTypeModel;