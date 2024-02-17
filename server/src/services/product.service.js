import ProductDAO from "../dao/products.dao.js";

const productDAO = new ProductDAO()

const getProducts = async () => {
    const result = productDAO.get();
    return result
}

const createProduct = async (product) => {
    const result = productDAO.save(product);
    return result
}

export default {
    createProduct,
    getProducts
}