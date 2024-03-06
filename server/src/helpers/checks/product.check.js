import { body, param } from "express-validator";
import { validateChecks } from "../../middlewares/validate.middleware.js";

export const validateId = validateChecks([
  param("pid").isMongoId().withMessage("El ID del producto no es válido"),
]);

export const validateCreate = validateChecks([
  body("name")
    .notEmpty().isString()
    .withMessage("El nombre del producto es requerido")
    .isLength({ min: 3, max: 50 })
    .withMessage("Debe tener al menos 5 caracteres")
    .custom((value) => {
      if (!/^[A-Z]/.test(value)) {
        throw new Error("El nombre del producto debe comenzar con mayúscula");
      }
      return true;
    }),
  body("price")
    .notEmpty()
    .isNumeric()
    .withMessage("El precio debe ser un número")
    .custom((value) => {
      const numericValue = parseFloat(value);
      if (numericValue <= 0) {
        throw new Error("El precio debe ser un número positivo");
      }
      return true;
    }),
  body("stock")
    .notEmpty()
    .isNumeric()
    .withMessage("El stock debe ser un número")
    .custom((value) => {
      const numericValue = parseFloat(value);
      if (numericValue < 0) {
        throw new Error("El stock debe ser un número positivo");
      }
      return true;
    }),
  body("sku")
    .notEmpty()
    .isNumeric()
    .withMessage("El sku debe ser un número")
    .custom((value) => {
      const numericValue = parseInt(value);
      if (numericValue < 10000 || numericValue > 99999) {
        throw new Error("El sku debe estar en el rango de 10000 a 99999");
      }
      return true;
    }),
    body("description")
    .notEmpty().isString()
    .withMessage("La descripcion del producto es requerido")
    .isLength({ min: 3, max: 50 })
    .withMessage("Debe tener al menos 5 caracteres")
    .custom((value) => {
      if (!/^[A-Z]/.test(value)) {
        throw new Error("El nombre del negocio debe comenzar con mayúscula");
      }
      return true;
    }),
    body("rating")
    .notEmpty()
    .isNumeric()
    .withMessage("El rating debe ser un número")
    .custom((value) => {
      const numericValue = parseInt(value);
      if (numericValue < 1 || numericValue > 5) {
        throw new Error("El rating debe estar en el rango de 1 a 5");
      }
      return true;
    }),
]);

export const validateUpdate = validateChecks([
  param("oid").isMongoId().withMessage("El ID del producto no es válido"),
  body("name")
    .optional()
    .isString()
    .withMessage("El nombre debe ser una cadena de texto"),
  body("price")
    .optional()
    .isNumeric()
    .withMessage("El precio debe ser un número"),
  body("stock")
    .optional()
    .isNumeric()
    .withMessage("La cantidad debe ser un número"),
]);
