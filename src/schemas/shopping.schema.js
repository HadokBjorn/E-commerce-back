import joi from 'joi';

export const productSchema = joi.object({
	name: joi.string().min(3).required(),
	value: joi.number().required(),
});
