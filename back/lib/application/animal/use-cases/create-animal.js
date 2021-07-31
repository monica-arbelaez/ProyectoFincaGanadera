const AgreggateId = require("../../../domain/agreggate-id");
const Animal = require("../../../domain/animal/model/animal");
const Age = require("../../../domain/animal/model/values/age");
const Breed = require("../../../domain/animal/model/values/breed");
const Gender = require("../../../domain/animal/model/values/gender");

const createAnimal = ( { pastureId = null, breed, age, gender },  animalRepository
) => {
  console.log("llamado");
  const animal = new Animal(
    new Breed(breed),
    new Age(age),
    new Gender(gender)
  );
  if (pastureId) {
    animal.associatePasture(new AgreggateId(pastureId));
  }
  return animalRepository.createAnimal(animal);
};
module.exports = createAnimal; 