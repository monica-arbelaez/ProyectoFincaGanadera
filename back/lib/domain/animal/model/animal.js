const AgreggateId = require("../../agreggate-id");
const DataSheet = require("./entities/data-sheet");
const Breed = require("./values/breed");
const Age = require("./values/age");
const Gender = require("./values/gender");
const Date = require("./values/date");
const IsVaccinated = require("./values/is-vaccinated");
const Registry = require("./entities/registry");

class Animal {
  constructor(breed, age, gender) {
    this.pastureId = null;
    this.dataSheet = newDataSheet(breed, age, gender);
  }
  associatePasture(newPastureId) {
    this.pastureId = validatePastureId(newPastureId);
  }

  createRegistry(date, isVaccinate) {
    if (!(date instanceof Date)) {
      throw new Error(
        "Para crear el registro debes introducir una instancia de Date"
      );
    }
    if (!(isVaccinate instanceof IsVaccinated)) {
      throw new Error(
        "Para crear el registro debes introducir una instancia de IsVaccinated"
      );
    }
    this.registry = new Registry(date, isVaccinate);
  }
  updateAgeDataSheet(newAge) {
    this.dataSheet.updateAge(newAge);
  }

  updateVaccinateRegistry(isVaccinated) {
    if (typeof this.registry === "undefined") {
      this.registry = new Registry();
    }
    this.registry.updateVaccinate(isVaccinated);
  }
}

module.exports = Animal;

function validatePastureId(pastureId) {
  if (pastureId === null) {
    return pastureId;
  }
  if (!(pastureId instanceof AgreggateId)) {
    throw new Error("El id del potrero debe ser de instancia AgreggateId");
  }
  return pastureId;
}

function newDataSheet(breed, age, gender) {
  if (!(breed instanceof Breed)) {
    throw new Error("La raza dede ser instancia Breed");
  }
  if (!(age instanceof Age)) {
    throw new Error("La edad dede ser instancia Age");
  }
  if (!(gender instanceof Gender)) {
    throw new Error("El sexo del animal dede ser instancia Gender");
  }
  return new DataSheet(breed, age, gender);
}
