import businessModel from "../models/business.model.js";

export default class BusinessDAO {
  get = () => {
    return businessModel.find();
  };

  getById = (id) => {
    return businessModel.findOne({ _id: id });
  };

  create = (id) => {
    return businessModel.create({userId: id});
  };

  updateQuantityProduct = (id, idProduct, quantity) => {
    return businessModel.updateOne(
      {
        _id: id,
        'products.product_id': idProduct,
      },
      {
        $set: {
          'products.$.quantity': quantity,
        },
      }
    );
  };

  insertProductOrder = (id, doc) => {
    return businessModel.updateOne(
      { _id: id },
      {
        $push: {
          products: doc,
        },
      }
    );
  };

  deleteProductOrder = (id, idProduct) => {
    return businessModel.updateOne(
      { _id: id },
      {
        $pull: {
          products: { product_id: idProduct },
        },
      }
    );
  };

  delete = (id) => {
    return businessModel.findByIdAndDelete(id);
  };
}
