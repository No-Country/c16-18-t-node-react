import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2"

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    price: { type: Number,required:true,min:1},

    quanty: {type: Number,required:true},
})

productSchema.plugin(mongoosePaginate)

const productModel = mongoose.model("products", productSchema)
export default productModel