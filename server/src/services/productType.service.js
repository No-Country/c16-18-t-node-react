import ProductTypeDAO from "../dao/productType.dao.js";

const productTypeDAO = new ProductTypeDAO();

const getProductTypes = async () => {
  try {
    const result = await productTypeDAO.get();
    return result;
} catch (err) {
  throw new Error(err.message);
}
};

const getProductTypeById = async (id) => {
  try {
      const result = await productTypeDAO.getById(id);
      if(!result) throw new Error("El id ingresado no existe")
      return result;
  } catch (err) {
    throw new Error(err.message);
  }
};

const createProductType = async (productType) => {
  try {
      const result = await productTypeDAO.create(productType);
      return result;
  } catch (err) {
    throw new Error(err.message);
  }
};

const updateProductType = async (id, obj) => {
  try {
      const result = await productTypeDAO.update(id, obj);
      if(!result) throw new Error("El id ingresado no existe")
      return result;
  } catch (err) {
    throw new Error(err.message);
  }
};

const deleteProductType = async (id) => {
  try {
      const result = await productTypeDAO.delete(id);
      if(!result) throw new Error("El id ingresado no existe")
      return result;
  } catch (err) {
    throw new Error(err.message);
  }
};

export default {
  createProductType,
  getProductTypes,
  getProductTypeById,
  updateProductType,
  deleteProductType
};