import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";
import { productTypeCollection } from "../config/collections.config.js";

const productTypeSchema = new mongoose.Schema({
  //images: { type: Array, default: [] }, *VER SI AGREGAMOS LAS IMAGENES DE LAS CATEGORIAS* 
  name: {type: String,required: true,},
  description: { type: String, required: true },
  enabled: { type: Boolean, default: true },
  // image: {type: String}
  // VER RELACIONES CON PRODUCT
}, { timestamps: {} });

productTypeSchema.plugin(mongoosePaginate);

const productTypeModel = mongoose.model(productTypeCollection, productTypeSchema);
export default productTypeModel;