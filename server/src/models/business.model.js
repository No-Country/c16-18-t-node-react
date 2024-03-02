import mongoose from "mongoose";
import { options } from "../config/options.config.js";

const businessSchema = new mongoose.Schema({
    userId:{
        type: mongoose.SchemaTypes.ObjectId,
        ref: options.collections.usersCollection,
    },
    productosId:{
        type: mongoose.SchemaTypes.ObjectId,
        ref: options.collections.productsCollection,
    },
    categoryId:{
        type: mongoose.SchemaTypes.ObjectId,
        ref: options.collections.productTypeCollection,
    }
});

 const businessModel = mongoose.model(options.collections.businessCollection, businessSchema);
 
 export default businessModel