import { Router } from "express";
import {
  register,
  login,
  logout,
  getUsers,
} from "../controllers/auth.controller.js";

import {
  validateRegister,
  validateLogin,
} from "../helpers/checks/auth.check.js";

const router = Router();

router.post("/register", validateRegister, register);

router.post("/login", validateLogin, login);

router.post("/logout", logout);

router.get("/users", getUsers);

export default router;
