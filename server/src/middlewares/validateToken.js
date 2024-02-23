import jwt from 'jsonwebtoken';

import { options } from '../config/options.config.js';

export const authRequired = (req, res, next) => {
	const { token } = req.cookies;

	if (!req.cookies)
		return res.status(401).json({ message: 'No token, autorization denied' });

	jwt.verify(token, options.token.secretKey, (err, user) => {
		if (err)
			return res.status(403).json({ message: 'Invalid token', error: err.message });

		console.log('desde el middleware', user);

		req.user = user;

		next();
	});
};
