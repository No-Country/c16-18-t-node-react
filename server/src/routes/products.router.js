import { Router } from "express";
import { body, param } from "express-validator";
import productController from "../controllers/products.controller.js";

const router = Router();
// ruteo con validaciones.
router.get("/", productController.getProductController);

router.get(
  "/:oid",
  param("oid").isMongoId().withMessage("El ID del producto no es válido"),
  productController.getProductByIdController
);

router.post(
  "/",
  [
    body("name")
      .isString()
      .withMessage("El nombre debe ser una cadena de texto"),
    body("price").isNumeric().withMessage("El precio debe ser un número"),
    body("quanty").isNumeric().withMessage("La cantidad debe ser un número"),
  ],
  productController.createProductController
);

export default router;
