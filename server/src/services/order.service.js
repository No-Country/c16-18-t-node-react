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

const addProduct = async (orderId, productId, quantityNeed) => {
  try {
    const order = await orderDAO.getById(orderId);
    if (!order) throw new Error("El id ingresado no existe");
    const product = await productDAO.getById(productId);
    if (!product) throw new Error("El id ingresado no existe");

    const orderProduct = await checkItemExistOrder(orderId, productId);

    if (orderProduct) {
      return await updateQuantity(orderId, orderProduct, quantityNeed);
    } else {
      return await addNewProduct(orderId, productId, quantityNeed);
    }
  } catch (err) {
    throw new Error(err.message);
  }
};

const checkStockProduct = async (productId, quantityNeed) => {
  try {
    const product = await productDAO.getById(productId);
    if (!product) {
      return 0;
    }
    if (product.discontinued) {
      return 0;
    }
    return product.stock >= quantityNeed ? quantityNeed : product.stock;
  } catch (err) {
    throw new Error(err.message);
  }
};

const addNewProduct = async (orderId, productId, quantity) => {
  try {
    const quantityNeed = quantity || 1;
    const stockDisponible = await checkStockProduct(productId, quantityNeed);
    if (stockDisponible > 0) {
      const newProduct = {
        product_id: productId,
        quantity: stockDisponible,
      };
      const result = await orderDAO.insertProductOrder(orderId, newProduct);
      return result;
    }
  } catch (err) {
    throw new Error(err.message);
  }
};

const checkItemExistOrder = async (orderId, productId) => {
  try {
    const order = await orderDAO.getById(orderId);
    if (order && order.products && order.products.length > 0) {
      return order.products.find((product) => product.product_id === productId);
    }
    return null;
  } catch (err) {
    throw new Error(err.message);
  }
};

const updateQuantity = async (orderId, orderProduct, quantity) => {
  try {
    const quantityNeed = quantity;
    const quantityOrder = orderProduct.quantity + quantityNeed;

    if(quantityOrder <= 0){
      return await deleteProductOrder(orderId, orderProduct.product_id)
    }

    const stockDisponible = await checkStockProduct(
      orderProduct.product_id,
      quantityOrder
    );

    if (stockDisponible > 0) {
      return await orderDAO.updateQuantityProduct(
        orderId,
        orderProduct.product_id,
        stockDisponible
      );
    }
  } catch (err) {
    throw new Error(err.message);
  }
};

const deleteProductOrder = async (orderId, productId) => {
  try {
    return await orderDAO.deleteProductOrder(
      orderId,
      productId,
    );
  } catch (err) {
    throw new Error(err.message);
  }
};

export default {
  getOrders,
  getOrderById,
  createOrder,
  deleteOrder,
  addProduct,
};
