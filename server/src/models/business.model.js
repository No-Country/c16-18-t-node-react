import mongoose from "mongoose";
import { options } from "../config/options.config.js";

const businessSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    productos:[]
});

 const businessModel = mongoose.model(options.collections.businessCollection, businessSchema);
 
 export default businessModel