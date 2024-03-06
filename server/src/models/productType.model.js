import mongoose from "mongoose";
import { options } from "../config/options.config.js";

const productTypeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: {
    type: String,
    requied: true,
  },
  products: {
    type: [
      {
        productId: {
          type: mongoose.SchemaTypes.ObjectId,
          ref: options.collections.productsCollection,
        },
      },
    ],
    default: [],
  },
});

productTypeSchema.pre("findOne", function () {
  this.populate("products.productId");
});

const productTypeModel = mongoose.model(
  options.collections.productTypeCollection,
  productTypeSchema
);
export default productTypeModel;
