import orderService from "../services/order.service.js";

const getOrdersController = async (req, res) => {
  try {
    const orders = await orderService.getOrders();
    res.status(200).send({ status: "ok", payload: orders });
  } catch (err) {
    res.status(400).send({ status: "error", payload: err.message });
  }
};

const getOrderByIdController = async (req, res) => {
  try {
    const order = await orderService.getOrderById(req.params.oid);
    res.status(200).send({ status: "ok", payload: order });
  } catch (err) {
    res.status(400).send({ status: "error", payload: err.message });
  }
};

const createOrderController = async (req, res) => {
  try {
    const result = await orderService.createOrder();
    res.status(201).send({ status: "ok", payload: result });
  } catch (err) {
    res.status(400).send({ status: "error", payload: err.message });
  }
};


const deleteOrderController = async (req, res) => {
  try {
    const result = await orderService.deleteOrder(req.params.oid);
    res.status(201).send({ status: "ok", payload: result });
  } catch (err) {
    res.status(400).send({ status: "error", payload: err.message });
  }
};

const addProductOrderController = async (req, res) => {
  try {
    const result = await orderService.addProduct(req.params.oid, req.params.pid, req.body);
    res.status(201).send({ status: "ok", payload: result });
  } catch (err) {
    res.status(400).send({ status: "error", payload: err.message });
  }
};


export default {
  getOrdersController,
  getOrderByIdController,
  createOrderController,
  deleteOrderController,
  addProductOrderController
};
