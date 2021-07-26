const express = require("express");

const validationHandler = require("../utils/middleware/validationHandler");
const animalSchemas = require("../utils/schemas/animals-schemas");
const createAnimal = require("../animals-controllers/create-animal-controller");

function routesApi(app) {
  const router = express.Router();
  app.use("/api/animals", router);

  router.post(
    "/",
    validationHandler(animalSchemas.createAnimalSchema),
    async (req, res, next) => createAnimal(req, res, next)
  );
}

module.exports = routesApi;
