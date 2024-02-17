import ProductDAO from "../dao/products.dao.js";

import ProductRepository from "../repository/product.repository.js";

export const productService = new ProductRepository(new ProductDAO());