import productTypeModel from "../models/productType.model.js";

export default class ProductTypeDAO {
  get = () => {
    return productTypeModel.find();
  };

  getById = (id) => {
    return productTypeModel.findOne({ _id: id });
  };

  create = (doc) => {
    return productTypeModel.create(doc);
  };

  update = (id, doc) => {
    return productTypeModel.findByIdAndUpdate(id, { $set: doc }, { new: true });
  };

  delete = (id) => {
    return productTypeModel.findByIdAndDelete( id );
  };
}