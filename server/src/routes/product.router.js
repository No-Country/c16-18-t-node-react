import { Router } from "express";
import productController from "../controllers/product.controller.js";
import {
  validateCreate,
  validateId,
  validateUpdate,
} from "../helpers/checks/product.check.js";

const router = Router();

router.get("/", productController.getProductController);

router.get("/:pid", validateId, productController.getProductByIdController);

router.post("/", validateCreate, productController.createProductController);

router.put("/:pid", validateUpdate, productController.updateProductController);

router.delete("/:pid", validateId, productController.deleteProductController);

export default router;
