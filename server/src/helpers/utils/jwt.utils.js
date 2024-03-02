import jwt from 'jsonwebtoken';
import { options } from '../../config/options.config.js';

export function createAccessToken(payload) {
	return new Promise((resolve, reject) => {
		jwt.sign(payload, options.token.secretKey, { expiresIn: '1d' }, (err, token) => {
			if (err) reject(err);
			resolve(token);
		});
	});
}


export function checkAccessToken(token) {
	return new Promise((resolve, reject) => {
		jwt.verify(token, options.token.secretKey, (err, decoded) => {
			if (err) reject(err);
			resolve(decoded);
		});
	});
}