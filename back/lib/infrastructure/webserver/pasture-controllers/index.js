const createPasture = require("./create-pasture-controller");
const sortPastureByDensity = require("./sort-by-density-controller")
const sortPastureByLength = require("./sort-by-length-controller")
const listPastures = require("./list-pastures-controller")
const deletePasture = require("./delete-pasture-controller")


module.exports = {
    createPasture,
    sortPastureByDensity,
    sortPastureByLength,
    listPastures,
    deletePasture,
};