import BusinessDAO from "../dao/business.dao.js";

const businessDAO = new BusinessDAO();

const getBusiness = async () => {
  try {
    const result = await businessDAO.get();
    return result;
  } catch (err) {
    throw new Error(err.message);
  }
};

const getBusinessByUserId = async (userid) => {
  try {
    const result = await businessDAO.getByUserId(userid);
    if (!result) throw new Error("El id ingresado no existe");
    return result;
  } catch (err) {
    throw new Error(err.message);
  }
};

const createBusiness = async (id) => {
  try {
    const result = await businessDAO.create(id);
    return result;
  } catch (err) {
    throw new Error(err.message);
  }
};

const insertProductBusiness = async (id, productid) => {
  try {
    const result = await businessDAO.insertBusinessProduct(id, productid);
    return result;
  } catch (err) {
    throw new Error(err.message);
  }
};

const checkItemExistProduct = async (id, productid) => {
  try {
    const business = await businessDAO.getById(id);
    if (business && business.products && business.products.length > 0) {
      return business.products.find((product) => product.product_id === productId);
    }
    return null;
  } catch (err) {
    throw new Error(err.message);
  }
};

export default {
  getBusiness,
  createBusiness,
  getBusinessByUserId,
  insertProductBusiness
};
