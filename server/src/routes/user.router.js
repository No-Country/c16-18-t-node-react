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
import { checkAdminPermission } from '../middlewares/checkAdminPermission.js';

const router = Router();

router.get('/users', authRequired, checkAdminPermission, getUsers);

router.post(
	'/user-add',
	authRequired,
	checkAdminPermission,
	validateRegister,
	createUser
);

router.get('/user/:uid', authRequired, checkAdminPermission, getUserById);

router.put('/user/:uid', authRequired, checkAdminPermission, updateUser);

router.delete('/user/:uid', authRequired, checkAdminPermission, deleteUser);

export default router;
