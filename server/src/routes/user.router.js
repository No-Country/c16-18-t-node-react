import { Router } from 'express';
import {
	getUsers,
	createUser,
	getUserById,
	updateUser,
	deleteUser,
} from '../controllers/user.controller.js';

import { validateRegister } from '../helpers/checks/auth.check.js';
import { authRequired } from '../middlewares/validateToken.js';

const router = Router();

router.get('/users', authRequired, getUsers);

router.post('/user-add', authRequired, validateRegister, createUser);

router.get('/user/:uid', authRequired, getUserById);

router.put('/user/:uid', authRequired, updateUser);

router.delete('/user/:uid', authRequired, deleteUser);

export default router;
