import { body, param } from "express-validator";
import { validateChecks } from "../../middlewares/validate.middleware.js";

export const validateId = validateChecks([
  param("ptyid").isMongoId().withMessage("El ID del tipo de producto no es válido"),
]);

export const validateCreate = validateChecks([
  body("name").isLength({ min: 3, max:50 }).notEmpty().isString().withMessage("El nombre debe ser una cadena de texto"),
]);

export const validateUpdate = validateChecks([
  param("ptyid").isMongoId().withMessage("El ID del tipo de producto no es válido"),
  body("name").optional().isString().withMessage("El nombre debe ser una cadena de texto"),
]);
