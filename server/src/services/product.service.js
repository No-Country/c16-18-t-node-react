import ProductDAO from "../dao/products.dao.js";

const productDAO = new ProductDAO();

const getProducts = async () => {
  try {
    const result = productDAO.get();
    return result;
} catch (err) {
  throw new Error(err.message);
}
};

const getProductsById = async (id) => {
  try {
      const result = productDAO.getById(id);
      return result;
  } catch (err) {
    throw new Error(err.message);
  }
};

const createProduct = async (product) => {
  try {
      const result = productDAO.save(product);
      return result;
  } catch (err) {
    throw new Error(err.message);
  }
};

export default {
  createProduct,
  getProducts,
  getProductsById,
};
