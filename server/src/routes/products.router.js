import { Router } from "express";
import productController from "../controllers/products.controller.js";

const router = Router();

router.get(
    "/",
    productController.getProductController
  );

  router.get(
    "/:oid",
    productController.getProductByIdController
  );

router.post(
    "/",
    productController.createProductController
  );

  

export default router;
