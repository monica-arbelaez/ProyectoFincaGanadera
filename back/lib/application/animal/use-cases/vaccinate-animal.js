const Registry = require("../../../domain/animal/model/entities/registry");
const DateHistory = require("../../../domain/animal/model/values/date");
const IsVaccinated = require("../../../domain/animal/model/values/is-vaccinated");

const getDateNow = () => {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  if (month < 10) {
    return `${day}/0${month}/${year}`;
  }
  return `${day}/${month}/${year}`;
};

const vaccinateAnimal = async (animalId, vaccinate, repository) => {
  const isVaccinated = vaccinate.isVaccinated;
  const toUpdate = new Registry(
    new DateHistory(getDateNow()),
    new IsVaccinated(isVaccinated)
  );
  const vaccinatedAnimal = await repository.updateAnimal(animalId, {
    registry: toUpdate,
  });
  return vaccinatedAnimal;
};
module.exports = vaccinateAnimal;
