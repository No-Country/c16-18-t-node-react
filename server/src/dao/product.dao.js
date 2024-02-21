import productModel from "../models/product.model.js";

export default class ProductDAO {
  get = () => {
    return productModel.find();
  };

  getById = (id) => {
    return productModel.findOne({ _id: id });
  };

  create = (doc) => {
    return productModel.create(doc);
  };

  update = (id, doc) => {
    return productModel.findByIdAndUpdate(id, { $set: doc }, { new: true });
  };

  delete = (id) => {
    return productModel.findByIdAndDelete( id );
  };
}
