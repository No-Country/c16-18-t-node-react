import mongoose from "mongoose";
import { options } from "../config/options.config.js";
import { faker } from "@faker-js/faker";


const productSchema = new mongoose.Schema({
  images: { type: Array, default: [] },
  name: {
    type: String,
    required: true,
  },
  description: { type: String, required: true },
  price: { type: Number, min: 1 },
  enabled: { type: Boolean, default: true },
  discontinued: { type: Boolean, default: false },
  sku: { type: Number, unique: true, required: true },
  stock: { type: Number, required: true },
  category_ids: {type: Array, default: []},
  rating: { type: Number},
  category: {type: String},
  image:  {
    type: String,
    default: () =>
      faker.image.urlLoremFlickr({
        width: 246,
        height: 246,
        category: "abstract",
      }),
  },
}, { timestamps: {} });

const productModel = mongoose.model(options.collections.productsCollection, productSchema);
export default productModel;
