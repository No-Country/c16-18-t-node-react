import { Router } from "express";
import productController from "../controllers/products.controller.js";
import {
  validateCreate,
  validateGetById,
} from "../helpers/checks/product.check.js";

const router = Router();
// ruteo con validaciones.
router.get("/", productController.getProductController);

router.get(
  "/:oid",
  validateGetById,
  productController.getProductByIdController
);

router.post("/", validateCreate, productController.createProductController);

export default router;
