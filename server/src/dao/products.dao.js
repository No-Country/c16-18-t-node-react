import productModel from "../models/product.model.js";

export default class ProductDAO {

    get = () =>{
        return productModel.find()
    }

    getById = (params) =>{
        return productModel.findById(params);
    }

    save = (doc) =>{
        return productModel.create(doc);
    }

    update = (id,doc) =>{
        return productModel.findByIdAndUpdate(id,{$set:doc})
    }

    delete = (id) =>{
        return productModel.findByIdAndDelete(id);
    }
}