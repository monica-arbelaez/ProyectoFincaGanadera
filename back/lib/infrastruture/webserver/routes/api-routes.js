const express = require("express");
const createAnimal = require("../animals-controllers/create-animal-controller");

function routesApi(app) {
  const router = express.Router();
  app.use("/api/animals", router);

  router.post("/", async (req, res, next) => createAnimal(req, res, next));
}

module.exports = routesApi;
