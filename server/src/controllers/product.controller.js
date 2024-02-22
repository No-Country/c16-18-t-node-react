import productService from "../services/product.service.js";

const getProductController = async (req, res) => {
  try {
    const products = await productService.getProducts();
    res.status(200).send({ status: "ok", payload: products });
  } catch (err) {
    res.status(400).send({ status: "error", payload: err.message });
  }
};

const getProductByIdController = async (req, res) => {
  try {
    const product = await productService.getProductsById(req.params.pid);
    res.status(200).send({ status: "ok", payload: product });
  } catch (err) {
    res.status(400).send({ status: "error", payload: err.message });
  }
};

const createProductController = async (req, res) => {
  try {
    const result = await productService.createProduct(req.body);
    res.status(201).send({ status: "ok", payload: result });
  } catch (err) {
    res.status(400).send({ status: "error", payload: err.message });
  }
};

const updateProductController = async (req, res) => {
  try {
    const result = await productService.updateProduct(req.params.pid, req.body);
    res.status(201).send({ status: "ok", payload: result });
  } catch (err) {
    res.status(400).send({ status: "error", payload: err.message });
  }
};

const deleteProductController = async (req, res) => {
  try {
    const result = await productService.deleteProduct(req.params.pid);
    res.status(201).send({ status: "ok", payload: result });
  } catch (err) {
    res.status(400).send({ status: "error", payload: err.message });
  }
};


export default {
  getProductController,
  createProductController,
  getProductByIdController,
  updateProductController,
  deleteProductController
};
