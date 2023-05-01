import joi from "joi";

export const productSchema = joi.object({
    name: joi.string().required(),
    value: joi.number().required(),
});


