import OrderDAO from "../dao/order.dao.js";
import ProductDAO from "../dao/product.dao.js";

const orderDAO = new OrderDAO();
const productDAO = new ProductDAO();

const getOrders = async () => {
  try {
    const result = await orderDAO.get();
    return result;
  } catch (err) {
    throw new Error(err.message);
  }
};

const getOrderById = async (id) => {
  try {
    const result = await orderDAO.getById(id);
    if (!result) throw new Error("El id ingresado no existe");
    return result;
  } catch (err) {
    throw new Error(err.message);
  }
};

const createOrder = async () => {
  try {
    const result = await orderDAO.create();
    return result;
  } catch (err) {
    throw new Error(err.message);
  }
};

const deleteOrder = async (id) => {
  try {
    const result = await orderDAO.delete(id);
    if (!result) throw new Error("El id ingresado no existe");
    return result;
  } catch (err) {
    throw new Error(err.message);
  }
};

const addProduct = async (orderId, productId, obj) => {
  try {
    const order = await orderDAO.getById(orderId);
    if (!order) throw new Error("El id ingresado no existe");
    const product = await productDAO.getById(productId);
    if (!product) throw new Error("El id ingresado no existe");
    if (product.quanty == 0 || product.quanty < obj) {
      throw new Error("El stock es insuficiente");
    }
    const papa = await checkStockProduct(productId, obj)
    const result = await orderDAO.updateOne(orderId, product)
    return result

  } catch (err) {
    throw new Error(err.message);
  }
};

const checkStockProduct = async (productId, quantityNeed) => {
  try {
    const product = await productDAO.getById(productId);
    console.log(product.stock)
    
  } catch (error) {
    
  }
}

export default {
  getOrders, 
  getOrderById,
  createOrder,
  deleteOrder,
  addProduct,
};
