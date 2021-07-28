const express = require("express");

const validationHandler = require("../utils/middleware/validationHandler");
const animalSchemas = require("../utils/schemas/animals-schemas");
const controllers = require("../animals-controllers/index");
const createPasture = require("../pasture-controllers/create-pasture-controller")
const pastureSchemas = require("../utils/schemas/pasture-schemas")

function routesApi(app) {
  const router = express.Router();
  app.use("/api/animals", router);

  router.post(
    "/create",
    validationHandler(animalSchemas.createAnimalSchema),
    async (req, res, next) => await controllers.createAnimal(req, res, next)
  );
  router.get(
    "/sort-by-pasture",
    async (req, res, next) => await controllers.sortAnimalsByPasture(req, res, next)
  );
  router.post(
    "/create-pasture",
    validationHandler(pastureSchemas.createPastureSchema),
    async (req, res, next) => createPasture(req, res, next)
  );
}

module.exports = routesApi;