import { Router } from "express";
import productController from "../controllers/products.controller.js";

const router = Router();

router.get(
    "/",
    productController.getProduct
  );

router.post(
    "/",
    productController.createProduct
  );

export default router;
