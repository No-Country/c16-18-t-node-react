import orderModel from "../models/order.model.js";

export default class OrderDAO {
  get = () => {
    return orderModel.find();
  };

  getById = (id) => {
    return orderModel.findOne({ _id: id });
  };

  create = () => {
    return orderModel.create({});
  };

  updateQuantityProduct = (id, idProduct, quantity) => {
    return orderModel.updateOne(
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
    return orderModel.updateOne(
      { _id: id },
      {
        $push: {
          products: doc,
        },
      }
    );
  };

  deleteProductOrder = (id, idProduct) => {
    return orderModel.updateOne(
      { _id: id },
      {
        $pull: {
          products: { product_id: idProduct },
        },
      }
    );
  };

  delete = (id) => {
    return orderModel.findByIdAndDelete(id);
  };
}
