const Fence = require("./entities/fence");
const Grass = require("./entities/grass");
const Area = require("./values/area");
const Density = require("./values/density");
const Length = require("./values/length");

class Pasture {
  constructor(id = null, area) {
    this.id = id;
    this.area = area;
  }
  updateArea(newArea) {
    if (!(newArea instanceof Area)) {
      throw new Error("Para actualizar area debe introducir una instancia de Area")
    }
    this.area = newArea;
  }
  associateGrass(density) {
    if (!(density instanceof Density)) {
      throw new Error("Para asociar pasto debes introducir una instancia de Density")
    }
    this.grass = new Grass(density);
  }
  associateFence(length) {
    if (!(length instanceof Length)) {
      throw new Error("Para asociar cerca debe introducir una instancia de Length")
    }
    this.fence = new Fence(length);
  }
  updateDensityGrass(density) {
    if (typeof this.grass == "undefined") {
      this.grass = new Grass();
    }
    this.grass.updateDensity(density);
  }
  updateLengthFence(length) {
    if (typeof this.fence == "undefined") {
      this.fence = new Fence();
    }
    this.fence.updateLength(length);
  }
}

module.exports = Pasture;
