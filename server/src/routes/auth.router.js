import { Router } from 'express';
import {
	register,
	login,
	logout,
	/* getUsers, */
} from '../controllers/auth.controller.js';

import { validateRegister, validateLogin } from '../helpers/checks/auth.check.js';

const router = Router();

// Validaciones, se ejecutan todas las validaciones para las solicitudes de entradas, si alguna falla da un error 400  con el detalle
// en caso de pasarlas se llama a la funcion next() para avanzar al siguiente middleware

router.post('/register', validateRegister, register);

router.post('/login', validateLogin, login);

router.post('/logout', logout);

/* router.get("/users", getUsers); */

export default router;
