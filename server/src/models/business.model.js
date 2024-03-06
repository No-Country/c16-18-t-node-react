import mongoose from "mongoose";
import { options } from "../config/options.config.js";
import { faker } from "@faker-js/faker";

const businessSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  userId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: options.collections.usersCollection,
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
  categoryId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: options.collections.productTypeCollection,
  },
  imageUrl: {
    type: String,
    default: () =>
      faker.image.urlLoremFlickr({
        width: 238,
        height: 203,
        category: "business",
      }), 
  },
});

businessSchema.pre("findOne", function () {
  this.populate("products.productId");
});

const businessModel = mongoose.model(
  options.collections.businessCollection,
  businessSchema
);

export default businessModel;
