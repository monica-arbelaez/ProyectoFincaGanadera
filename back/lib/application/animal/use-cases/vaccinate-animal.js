const Registry = require("../../../domain/animal/model/entities/registry");
const Date = require("../../../domain/animal/model/values/date");
const IsVaccinated = require("../../../domain/animal/model/values/is-vaccinated");

const vaccinateAnimal = async (animalId, value, repository) => {
  const isVaccinated = !(value == "false");
  const toUpdate = new Registry(
    new Date("15/07/2021"),
    new IsVaccinated(isVaccinated)
  );
  console.log(toUpdate)
  const vaccinatedAnimal = await repository.updateAnimal(animalId, {
    registry: toUpdate,
  });
  return vaccinatedAnimal;
};
module.exports = vaccinateAnimal;
