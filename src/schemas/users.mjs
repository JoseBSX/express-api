import Joi from 'joi';


const stringPattern = /^[a-zA-ZÀ-ÿ\s]+$/;

export const usersSchema = Joi.object({
  id: Joi.string().hex().length(24)
    .alter({
      GET: (schema) => schema.required(),
      PATCH: (schema) => schema.forbidden(),
      POST: (schema) => schema.forbidden(),
    }),
  name: Joi.string().pattern(stringPattern, 'string').max(40)
    .alter({
      POST: (schema) => schema.required(),
    }),
  paternal_surname: Joi.string().pattern(stringPattern, 'string').max(40)
    .alter({
      POST: (schema) => schema.required(),
    }),
  maternal_surname: Joi.string().pattern(stringPattern, 'string').max(40),
  phone_number: Joi.string().pattern(/^\d+$/).length(10)
    .alter({
      POST: (schema) => schema.required(),
    }),
  email: Joi.string().email().max(40),
  username: Joi.string().pattern(stringPattern, 'string').max(30)
    .alter({
      POST: (schema) => schema.required(),
    }),
  password: Joi.string().max(20)
    .alter({
      POST: (schema) => schema.required(),
    }),
});
