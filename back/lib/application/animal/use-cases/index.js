const createAnimal = require("./create-animal");
const sortedAnimalsByPasture = require("./animals-sorted-by-pasture")
const filterAnimalsByGender = require("./filter-by-gender")
const vaccinateAnimal = require("./vaccinate-animal")
const getAnimals = require("./get-all")

module.exports = {
  createAnimal,
  sortedAnimalsByPasture,
  filterAnimalsByGender,
  vaccinateAnimal,
  getAnimals
};
