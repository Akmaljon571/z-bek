import joi from "joi"

export const createJoi = joi.object().keys({
    name: joi.string().required(),
    password: joi.string().required()
})
