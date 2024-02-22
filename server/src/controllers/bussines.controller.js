import businessModel from "../models/business.model.js";

export const getBusiness = async (req, res) => {
  try {
    const business = await businessModel.findById(req.params.id);
    res.status(200).json(business);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createBusiness = async (req, res) => {
  const business = req.body;
  const newBusiness = new businessModel(business);
  try {
    await newBusiness.save();
    res.status(201).json(newBusiness);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
