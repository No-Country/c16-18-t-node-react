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

  update = (id, doc) => {
    return orderModel.findByIdAndUpdate(id, { $set: doc }, { new: true });
  };

  updateOne = (id, doc) => {
    return orderModel.updateOne(
      { _id: id },
      {
        $push: {
          products: doc,
        },
      }
    );
  };

  delete = (id) => {
    return orderModel.findByIdAndDelete(id);
  };
}
