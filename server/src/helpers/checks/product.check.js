import { body, param } from "express-validator";
import { validateChecks } from "../../middlewares/validate.middleware.js";

export const validateGetById = validateChecks([
  param("oid").isMongoId().withMessage("El ID del producto no es válido"),
]);

export const validateCreate = validateChecks([
  body("name").notEmpty().isString().withMessage("El nombre debe ser una cadena de texto"),
  body("price").isNumeric().withMessage("El precio debe ser un número"),
  body("quanty").isNumeric().withMessage("La cantidad debe ser un número"),
]);
