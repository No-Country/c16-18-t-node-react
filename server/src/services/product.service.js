import ProductDAO from "../dao/product.dao.js";
import BusinessDAO from "../dao/business.dao.js";

const productDAO = new ProductDAO();
const businessDAO = new BusinessDAO();

const getProducts = async () => {
  try {
    const result = await productDAO.get();
    return result;
  } catch (err) {
    throw new Error(err.message);
  }
};

const getProductsById = async (id) => {
  try {
    const result = await productDAO.getById(id);
    if (!result) throw new Error("El id ingresado no existe");
    return result;
  } catch (err) {
    throw new Error(err.message);
  }
};

const createProduct = async (product) => {
  try {
    const result = await productDAO.create(product);
    const inserProduct = await businessDAO.insertBusinessProduct(
      product.userId,
      result._id
    );
    return inserProduct;
  } catch (err) {
    throw new Error(err);
  }
};

const updateProduct = async (id, obj) => {
  try {
    const result = await productDAO.update(id, obj);
    if (!result) throw new Error("El id ingresado no existe");
    return result;
  } catch (err) {
    throw new Error(err.message);
  }
};

const deleteProduct = async (id) => {
  try {
    const result = await productDAO.delete(id);
    if (!result) throw new Error("El id ingresado no existe");
    return result;
  } catch (err) {
    throw new Error(err.message);
  }
};

export default {
  createProduct,
  getProducts,
  getProductsById,
  updateProduct,
  deleteProduct,
};
