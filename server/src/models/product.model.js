import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2"

const productsSchema = new mongoose.Schema({
    name: {
        type: String,
        default: true
    },
})

productsSchema.plugin(mongoosePaginate)

const productModel = mongoose.model("products", productsSchema)
export default productModel