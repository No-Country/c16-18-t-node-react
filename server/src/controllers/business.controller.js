import businessService from "../services/business.service.js";

const getBusinessController = async (req, res) => {
  try {
    const business = await businessService.getBusiness();
    res.status(200).send({ status: "ok", payload: business });
  } catch (err) {
    res.status(400).send({ status: "error", payload: err.message });
  }
};

const getBusinessByUserIdController = async (req, res) => {
  try {
    const business = await businessService.getBusinessByUserId(req.params.uid);
    res.status(200).send({ status: "ok", payload: business });
  } catch (err) {
    res.status(400).send({ status: "error", payload: err.message });
  }
};

const insertProductBusinessController = async (req, res) => {
  try {
    const result = await businessService.insertProductBusiness(req.params.bid, req.params.pid);
    res.status(200).send({ status: "ok", payload: result });
  } catch (err) {
    res.status(400).send({ status: "error", payload: err.message });
  }
};

export default {
  getBusinessController,
  getBusinessByUserIdController,
  insertProductBusinessController
};
