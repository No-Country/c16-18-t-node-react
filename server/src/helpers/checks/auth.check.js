import { body } from "express-validator";
import { validateChecks } from "../../middlewares/validate.middleware.js";

export const validateRegister = validateChecks([
  body("name")
    .isLength({ min: 3, max: 50 })
    .notEmpty()
    .withMessage("El nombre de usuario es requerido"),
  body("lastname")
    .isLength({ min: 3, max: 50 })
    .notEmpty()
    .withMessage("El apellido de usuario es requerido"),
  body("email")
    .notEmpty()
    .isEmail()
    .withMessage("Debe ser un correo electrónico válido"),
  body("password")
    .isLength({ min: 5 })
    .withMessage("La contraseña debe tener al menos 5 caracteres"),
]);

export const validateLogin = validateChecks([
  body("email")
    .notEmpty()
    .isEmail()
    .withMessage("Debe ser un correo electrónico válido"),
  body("password").notEmpty().withMessage("La contraseña es requerida"),
]);
