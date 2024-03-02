import businessService from "../services/business.service.js";

const getBusinessController = async (req, res) => {
  try {
    const business = await businessService.getBusiness();
    res.status(200).send({ status: "ok", payload: business });
  } catch (err) {
    res.status(400).send({ status: "error", payload: err.message });
  }
};

export default {
  getBusinessController
};
