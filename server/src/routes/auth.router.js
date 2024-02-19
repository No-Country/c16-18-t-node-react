import { Router } from "express";
import { body, validationResult } from "express-validator";
import {
  register,
  login,
  logout,
  getUsers,
} from "../controllers/auth.controller.js";

const router = Router();

// Validaciones, se ejecutan todas las validaciones para las solicitudes de entradas, si alguna falla da un error 400  con el detalle
// en caso de pasarlas se llama a la funcion next() para avanzar al siguiente middleware

const validate = (validations) => {
  return async (req, res, next) => {
    await Promise.all(validations.map((validation) => validation.run(req)));

    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }

    res.status(400).json({ errors: errors.array() });
  };
};

router.post(
  "/register",
  validate([
    body("username")
      .notEmpty()
      .withMessage("El nombre de usuario es requerido"),
    body("email")
      .isEmail()
      .withMessage("Debe ser un correo electrónico válido"),
    body("password")
      .isLength({ min: 5 })
      .withMessage("La contraseña debe tener al menos 5 caracteres"),
  ]),
  register
);

router.post(
  "/login",
  validate([
    body("email")
      .isEmail()
      .withMessage("Debe ser un correo electrónico válido"),
    body("password").notEmpty().withMessage("La contraseña es requerida"),
  ]),
  login
);

router.post("/logout", logout);

router.get("/users", getUsers);

export default router;
