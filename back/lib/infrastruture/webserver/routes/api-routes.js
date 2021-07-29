const express = require("express");

const validationHandler = require("../utils/middleware/validationHandler");
const animalSchemas = require("../utils/schemas/animals-schemas");
const createAnimal = require("../animals-controllers/create-animal-controller");
const createPasture = require("../pasture-controllers/create-pasture-controller");
const pastureSchemas = require("../utils/schemas/pasture-schemas");
const pastureControllers = require("../pasture-controllers/index");

function routesApi(app) {
  const router = express.Router();
  app.use("/api/animals", router);

  router.post(
    "/create",
    validationHandler(animalSchemas.createAnimalSchema),
    async (req, res, next) => createAnimal(req, res, next)
  );

  router.post(
    "/create-pasture",
    validationHandler(pastureSchemas.createPastureSchema),
    async (req, res, next) => createPasture(req, res, next)
  );

  router.get(
    "/sort-by-density",
    async (req, res, next) => await pastureControllers.sortPastureByDensity(req, res, next)
  );
  router.get(
    "/sort-by-length",
    async (req, res, next) => await pastureControllers.sortPastureByLength(req, res, next)
  );
}

module.exports = routesApi;
