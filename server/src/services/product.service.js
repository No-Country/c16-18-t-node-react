import ProductDAO from "../dao/products.dao.js";

const productDAO = new ProductDAO();

const getProducts = async () => {
  const result = productDAO.get();
  return result;
};

const getProductsById = async (id) => {
  try {
    if (isNaN(id)) {
      throw new Error("Datos invalidos");
    } else {
      const result = productDAO.getById(id);
      return result;
    }
  } catch (err) {
    throw new Error(err.message);
  }
};

const createProduct = async (product) => {
  try {
    if (!product.name || !product.price || !product.quanty) {
      throw new Error("Datos invalidos");
    } else {
      const result = productDAO.save(product);
      return result;
    }
  } catch (err) {
    throw new Error(err.message);
  }
};

export default {
  createProduct,
  getProducts,
  getProductsById,
};
