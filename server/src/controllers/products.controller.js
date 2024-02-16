import { Router } from "express";
import { ProductManager } from "../dao/product.dao.js";

const router = Router();

export const getProductController = async (req, res) => {
 
      try {
        const getProducts = await ProductManager.getProducts();
        res.status(200).send({ status: "ok", payload: getProducts });
      } catch (err) {
        res.status(400).send({ status: "error", payload: err.message });
      }
    
    };


export const createProductController = async (req, res) => {

      try {
            const paginate = await ProductManager.paginateProducts(query, options);
            res.status(200).send({ status: "ok", payload: paginate });
          } catch (err) {
            res.status(400).send({ status: "error", payload: err.message });
       }

        const createProduct = await ProductManager.paginateProducts();
        return res.status(201).json({ status: "ok", payload: createProduct });
    
  };


  export default router;
