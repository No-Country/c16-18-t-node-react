import { body } from "express-validator";
import {validateChecks} from "../../middlewares/validate.middleware.js"

export const validateRegister = validateChecks([
    body("username")
      .notEmpty()
      .withMessage("El nombre de usuario es requerido"),
    body("email")
      .isEmail()
      .withMessage("Debe ser un correo electrónico válido"),
    body("password")
      .isLength({ min: 5 })
      .withMessage("La contraseña debe tener al menos 5 caracteres"),
  ])

  export const validateLogin = validateChecks([
    body("email")
      .isEmail()
      .withMessage("Debe ser un correo electrónico válido"),
    body("password").notEmpty().withMessage("La contraseña es requerida"),
  ])
