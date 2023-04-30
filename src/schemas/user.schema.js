import joi from "joi";

export const userSchema = joi.object({
    userName: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().required(),
    address: joi.string().required()
});

export const loginSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required()
});