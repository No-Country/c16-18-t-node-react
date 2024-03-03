export const checkAdminPermission = (req, res, next) => {
	if (req.user && req.user.rol === 'Admin') {
		next(); // Continuar con la siguiente función de middleware
	} else {
		res.status(403).send({
			status: 'error',
			payload: 'You do not have permission to perform this action',
		});
	}
};
