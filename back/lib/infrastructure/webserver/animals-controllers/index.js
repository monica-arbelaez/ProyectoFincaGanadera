const createAnimal = require("./create-animal-controller")
const sortAnimalsByPasture = require("./sorted-by-pasture-controller")
const filterAnimalsByGender = require("./filter-by-gender")
const vaccinateAnimal = require("./vaccinate-animal")

module.exports = {
    createAnimal,
    sortAnimalsByPasture,
    filterAnimalsByGender,
    vaccinateAnimal
}