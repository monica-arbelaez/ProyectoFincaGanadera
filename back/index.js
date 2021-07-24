console.log("Hello");

const Pasture = require("./lib/domain/pasture/model/pasture");
const Density = require("./lib/domain/pasture/model/values/density");
const newDensity = new Density(88);
const updateDensity = new Density(55);
const Area = require("./lib/domain/pasture/model/values/area");
const newArea = new Area(6);
const Length = require("./lib/domain/pasture/model/values/length");
const newLength = new Length(5.6);

const Fence = require("./lib/domain/pasture/model/entities/fence")
const newFence = new Fence(newLength)
console.log(newFence)

const updataArea = new Area(25);
const updateLength = new Length(7)
newFence.updateLength(updateLength)
console.log(newFence)

const potrero = new Pasture(null, newArea);
potrero.associateGrass(newDensity);
potrero.associateFence(newLength);
potrero.updateDensityGrass(updateDensity);
potrero.updateLengthFence(newLength);
potrero.updateArea(updataArea)
console.log(potrero);

// const AgreggateId = require("./lib/domain/agreggate-id");
// const Animal = require("./lib/domain/animal/model/animal");
// const Age = require("./lib/domain/animal/model/values/age");
// const Breed = require("./lib/domain/animal/model/values/breed");
// const Date = require("./lib/domain/animal/model/values/date");
// const Gender = require("./lib/domain/animal/model/values/gender");
// const IsVaccinated = require("./lib/domain/animal/model/values/is-vaccinated");
// const date = new Date('02/31/2021');
// console.log(date);

// const vacunado = new IsVaccinated(true);
// console.log(vacunado);
// const pastureId = "60dbef2f14bb751cf2198297"

// //
// const agregadoId = new AgreggateId(pastureId)
// const newBreed = new Breed("Holstein")
// const newAge = new Age(1)
// const newGenders = new Gender("Male")
// const animal = new Animal(1, agregadoId, newBreed, newAge, newGenders)
// console.log(animal);