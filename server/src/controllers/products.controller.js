import { productService } from "../services/index.js"

const getProduct = async (req, res) => {
 
      try {
        const products = await productService.getAll();
        res.status(200).send({ status: "ok", payload: products });
      } catch (err) {
        res.status(400).send({ status: "error", payload: err.message });
      }
    
    };


const createProduct = async (req, res) => {

  const {name, price, quanty} = req.body

  const product = {
    name,
    price,
    quanty
  }

      try {
            const result = await productService.create(product);
            res.status(200).send({ status: "ok", payload: result });
          } catch (err) {
            res.status(400).send({ status: "error", payload: err.message });
       }
    
  };

  export default {
    getProduct,
    createProduct
}
