import mongoose from "mongoose";
import { businessCollection } from "../config/collections.config.js";

const businessSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    productos:[]
});

 const businessModel = mongoose.model(businessCollection, businessSchema);
 
 export default businessModel