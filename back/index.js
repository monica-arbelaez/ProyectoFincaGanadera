console.log("Hello");

const Pasture = require("./lib/domain/pasture/model/pasture");
const Density = require("./lib/domain/pasture/model/values/density");
const newDensity = new Density(88);
const updateDensity = new Density(55);
const Area = require("./lib/domain/pasture/model/values/area");
const newArea = new Area(5.6);
const Length = require("./lib/domain/pasture/model/values/length");
const newLength = new Length(5.6);

// const Fence = require("./lib/domain/pasture/model/entities/fence")
// const newFence = new Fence( newLength)
// console.log(newFence)

// const updateLength = new Length(7)
// newFence.enlarge(updateLength)
// console.log(newFence)

const potrero = new Pasture(null, newArea);
potrero.associateGrass(newDensity);
potrero.associateFence(newLength);
potrero.updateDensityGrass(updateDensity);
potrero.updateLengthFence(newLength);
console.log(potrero);
