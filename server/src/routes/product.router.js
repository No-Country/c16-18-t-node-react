import { Router } from "express";
import productController from "../controllers/product.controller.js";
import {
  validateCreate,
  validateId,
  validateUpdate,
} from "../helpers/checks/product.check.js";
import compression from "express-compression";

const router = Router();

router.get(
  "/",
  compression({ brotli: { eneable: true, zlib: {} } }),
  productController.getProductController
);

router.get("/:pid", validateId, productController.getProductByIdController);

router.post("/", validateCreate, productController.createProductController);

router.put("/:pid", validateUpdate, productController.updateProductController);

router.delete("/:pid", validateId, productController.deleteProductController);

export default router;
 