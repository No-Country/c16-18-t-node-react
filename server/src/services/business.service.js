import BusinessDAO from "../dao/business.dao.js";
import ProductDAO from "../dao/product.dao.js";

const businessDAO = new BusinessDAO();
const productDAO = new ProductDAO();

const getBusiness = async () => {
  try {
    const result = await businessDAO.get();
    return result;
  } catch (err) {
    throw new Error(err.message);
  }
};

const createBusiness = async (id) => {
  const userId = id ;
  try {
    const result = await businessDAO.create(userId);
    return result;
  } catch (err) {
    throw new Error(err.message);
  }
};

export default {
  getBusiness,
  createBusiness
};
