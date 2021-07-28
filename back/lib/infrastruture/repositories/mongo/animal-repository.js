const AnimalRepository = require("../../../domain/animal/animal-repository");
const CrudMongoRepository = require("../crud-repository");

const collection = "animals";

class AnimalRepositoryMongo extends AnimalRepository {
  constructor() {
    super();
  }
  async createAnimal(animal) {
    return CrudMongoRepository.create(collection, animal);
  }
  async deleteAnimal(animalId) {
    return CrudMongoRepository.remove(collection, animalId);
  }

  async getAllAnimals() {
    return CrudMongoRepository.getAll(collection);
  }
  async updateAnimal(animalId, animalData) {
    return CrudMongoRepository.update(collection, animalId, animalData);
  }
  async getByAnimalId(animalId) {
    return CrudMongoRepository.getById(collection, animalId);
  }
}
module.exports = AnimalRepositoryMongo;
