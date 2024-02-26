import productTypeService from "../services/productType.service.js";

const getProductTypeController = async (req, res) => {
  try {
    const productTypes = await productTypeService.getProductTypes();
    res.status(200).send({ status: "ok", payload: productTypes });
  } catch (err) {
    res.status(400).send({ status: "error", payload: err.message });
  }
};

const getProductTypeByIdController = async (req, res) => {
  try {
    const productType = await productTypeService.getProductTypesById(req.params.ptyid);
    res.status(200).send({ status: "ok", payload: productType });
  } catch (err) {
    res.status(400).send({ status: "error", payload: err.message });
  }
};

const createProductTypeController = async (req, res) => {
  try {
    const result = await productTypeService.createProductType(req.body);
    res.status(201).send({ status: "ok", payload: result });
  } catch (err) {
    res.status(400).send({ status: "error", payload: err.message });
  }
};

const updateProductTypeController = async (req, res) => {
  try {
    const result = await productTypeService.updateProductType(req.params.ptyid, req.body);
    res.status(201).send({ status: "ok", payload: result });
  } catch (err) {
    res.status(400).send({ status: "error", payload: err.message });
  }
};

const deleteProductTypeController = async (req, res) => {
  try {
    const result = await productTypeService.deleteProductType(req.params.ptyid);
    res.status(201).send({ status: "ok", payload: result });
  } catch (err) {
    res.status(400).send({ status: "error", payload: err.message });
  }
};


export default {
  getProductTypeController,
  createProductTypeController,
  getProductTypeByIdController,
  updateProductTypeController,
  deleteProductTypeController
};