import { Router } from "express";
import productTypeController from "../controllers/productType.controller.js";
import {
  validateCreate,
  validateId,
  validateUpdate,
} from "../helpers/checks/productType.checks.js";

const router = Router();

router.get("/", productTypeController.getProductTypeController);

router.get("/:ptyid", validateId, productTypeController.getProductTypeByIdController);

router.post("/", validateCreate, productTypeController.createProductTypeController);

router.put("/:ptyid", validateUpdate, productTypeController.updateProductTypeController);

router.delete("/:ptyid", validateId, productTypeController.deleteProductTypeController);

export default router;