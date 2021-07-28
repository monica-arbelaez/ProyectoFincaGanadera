const joi = require('@hapi/joi');

const pastureIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/);
const pastureNameSchema = joi.string().min(1).max(20);
const pastureAreaSchema = joi.number().min(0).max(100);
const pastureLengthSchema = joi.number().min(0).max(1000);
const pastureDensitySchema = joi.number().min(0).max(100);


const createPastureSchema = {
  name:pastureNameSchema.required(),
  area: pastureAreaSchema.required(),
  length: pastureLengthSchema.required(),
  density: pastureDensitySchema.required(),
};

module.exports = {
    createPastureSchema,
    pastureIdSchema
};
