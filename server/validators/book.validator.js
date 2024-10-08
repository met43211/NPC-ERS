const Joi = require('joi');

const bookSchema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required(),
    pages_amount: Joi.number().optional(),
    year: Joi.number().required(),
    rating: Joi.number().custom((id, helpers) => {
        if (id<1 || id>5) {
            return helpers.error('rating must be between 1 and 5');
        }
        return id;
    }).required(),
    author_id: Joi.number().required(),
});

const updateBookSchema = bookSchema.fork(
    ['name', 'description', 'pages_amount', 'year', 'rating', 'author_id'],
    (field) => field.optional()
).keys({
    id: Joi.number().optional()
});

module.exports = {bookSchema, updateBookSchema};
