const Fence = require("./entities/fence");
const Grass = require("./entities/grass");
const Area = require("./values/area");
const Density = require("./values/density");
const Longitude = require("./values/longitude");
const Name = require("./values/name")

class Pasture {
  constructor( area,name) {
    this.area = validateArea(area);
    this.name = validateName(name);
  }
  updateArea(newArea) {
    this.area = validateArea(newArea);
  }
  updateName(newName) {
    this.name = validateName(newName);
  }
  associateGrass(density) {
    if (!(density instanceof Density)) {
      throw new Error("Para asociar pasto debes introducir una instancia de Density")
    }
    this.grass = new Grass(density);
  }
  associateFence(longitude) {
    if (!(longitude instanceof Longitude)) {
      throw new Error("Para asociar cerca debe introducir una instancia de Length")
    }
    this.fence = new Fence(longitude);
  }
  updateDensityGrass(density) {
    if (typeof this.grass === "undefined") {
      this.grass = new Grass();
    }
    this.grass.updateDensity(density);
  }
  updateLengthFence(length) {
    if (typeof this.fence === "undefined") {
      this.fence = new Fence();
    }
    this.fence.updateLength(length);
  }
}

module.exports = Pasture;

function validateArea(area) {
  if (!(area instanceof Area)) {
    throw new Error("Para agregar area debe introducir una instancia de Area")
  }
  return area
}
function validateName(name) {
  if (!(name instanceof Name)) {
    throw new Error("Para agregar nombre debe introducir una instancia de Name")
  }
  return name
}