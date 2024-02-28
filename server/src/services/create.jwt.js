import jwt from 'jsonwebtoken';
import { options } from '../config/options.config.js';

export function createAccessToken(payload) {
	console.log(options.token.secretKey);
	return new Promise((resolve, reject) => {
		jwt.sign(payload, options.token.secretKey, { expiresIn: '1d' }, (err, token) => {
			if (err) reject(err);
			resolve(token);
		});
	});
}
