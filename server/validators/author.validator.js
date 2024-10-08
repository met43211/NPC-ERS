const Joi = require('joi');

const authorSchema = Joi.object({
    name: Joi.string().required(),
    second_name: Joi.string().optional(),
    patronymic: Joi.string().optional(),
    date_of_birth: Joi.date().iso().required(),
    date_of_death: Joi.date().iso().optional(),
    country: Joi.string().optional(),
    image: Joi.optional()
});

const updateAuthorSchema = authorSchema.fork(
    ['name', 'second_name', 'patronymic', 'date_of_birth', 'date_of_death', 'country', 'image'],
    (field) => field.optional()
).keys({
    image_url: Joi.string().optional(),
    id: Joi.number().optional()
});

module.exports = {authorSchema, updateAuthorSchema};
