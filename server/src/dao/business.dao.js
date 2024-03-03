import businessModel from "../models/business.model.js";

export default class BusinessDAO {
  get = () => {
    return businessModel.find();
  };

  getByUserId = (userid) => {
    return businessModel.findOne({ userId: userid });
  };

  create = (id, businessName) => {
    return businessModel.create({ userId: id, name: businessName });
  };

  updateQuantityProduct = (id, idProduct, quantity) => {
    return businessModel.updateOne(
      {
        _id: id,
        "products.product_id": idProduct,
      },
      {
        $set: {
          "products.$.quantity": quantity,
        },
      }
    );
  };

  insertBusinessProduct = (userid, productid) => {
    return businessModel.updateOne(
      { userId: userid },
      {
        $push: {
          products: { productId: productid },
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
