import { Router } from "express";
import {
    getProductController,
    createProductController,
  } from "../controllers/products.controller.js";

const router = Router();

router.get(
    "/",
    getProductController
  );

router.post(
    "/",
    createProductController
  );

export default router;
