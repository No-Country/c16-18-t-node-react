import { body, param } from "express-validator";
import { validateChecks } from "../../middlewares/validate.middleware.js";

export const validateId = validateChecks([
  param("oid").isMongoId().withMessage("El ID del producto no es válido"),
]);

export const validateCreate = validateChecks([
  body("name").isLength({ min: 3, max:50 }).notEmpty().isString().withMessage("El nombre debe ser una cadena de texto"),
  body("price").isNumeric().withMessage("El precio debe ser un número"),
  body("quanty").isNumeric().withMessage("La cantidad debe ser un número"),
]);

export const validateUpdate = validateChecks([
  param("oid").isMongoId().withMessage("El ID del producto no es válido"),
  body("name").optional().isString().withMessage("El nombre debe ser una cadena de texto"),
  body("price").optional().isNumeric().withMessage("El precio debe ser un número"),
  body("quanty").optional().isNumeric().withMessage("La cantidad debe ser un número"),
]);
