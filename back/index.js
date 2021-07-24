console.log("Hello");

// const Density = require("./lib/domain/pasture/model/values/density");
// const newDensity = new Density(88);
// console.log(newDensity);
// const Area = require("./lib/domain/pasture/model/values/area");
// const newArea = new Area(5.6);
// console.log(newArea);
const Length = require("./lib/domain/pasture/model/values/length");
const newLength = new Length(5.6);
console.log(newLength);

const Fence = require("./lib/domain/pasture/model/entities/fence")
const newFence = new Fence( newLength)
console.log(newFence)

const updateLength = new Length(7)
newFence.enlarge(updateLength)
console.log(newFence)

