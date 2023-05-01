import joi from 'joi';

export const userSchema = joi.object({
	userName: joi.string().min(3).max(30).required(),
	email: joi.string().email().required(),
	password: joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
	address: joi.string().required(),
});

export const loginSchema = joi.object({
	email: joi.string().email().required(),
	password: joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
});
