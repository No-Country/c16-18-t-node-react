import productModel from "../models/product.model.js";

export class ProductManager {
  
    static getProducts = async () => {
      const products = await productModel.find().lean();
      return products;
    };

    static createProduct = async (objProduct) => {
      const newProduct = await productModel.create(objProduct);
      return newProduct;
    };
  
};