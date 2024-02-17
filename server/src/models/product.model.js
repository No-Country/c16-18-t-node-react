import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2"
import { productsCollection } from "../config/collections.config.js";

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    price: { type: Number,required:true,min:1},

    quanty: {type: Number,required:true},
})

productSchema.plugin(mongoosePaginate)

const productModel = mongoose.model(productsCollection, productSchema)
export default productModel