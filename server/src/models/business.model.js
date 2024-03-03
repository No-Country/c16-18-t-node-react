import mongoose from "mongoose";
import { options } from "../config/options.config.js";

const businessSchema = new mongoose.Schema({
    userId:{
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
    categoryId:{
        type: mongoose.SchemaTypes.ObjectId,
        ref: options.collections.productTypeCollection,
    }
});

businessSchema.pre("findOne", function(){
    this.populate("products.productId")
})

 const businessModel = mongoose.model(options.collections.businessCollection, businessSchema);
 
 export default businessModel