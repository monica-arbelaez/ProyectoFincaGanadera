const Animal = require('../../../domain/animal/model/animal');

module.exports = ( {pastureId = null, breed, age, gender}, animalRepository ) => {
  const animal = new Animal(pastureId, breed, age, gender);
  return animalRepository.createAnimal(animal, animalRepository);
};
