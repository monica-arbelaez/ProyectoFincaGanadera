const PastureRepository = require("../../../domain/pasture/pasture-repository");
const CrudMongoRepository = require("./crud-repository");

const collection = "pastures";

class PastureRepositoryMongo extends PastureRepository {
  constructor() {
    super();
  }
  async createPasture(pasture) {
    return CrudMongoRepository.create(collection, pasture);
  }
  async deletePasture(pastureId) {
    return CrudMongoRepository.remove(collection, pastureId);
  }

  async getAllPastures() {
    return CrudMongoRepository.getAll(collection);
  }
  async updatePasture(pastureId, pastureData) {
    return CrudMongoRepository.update(collection, pastureId, pastureData);
  }
  async getByPastureId(pastureId) {
    return CrudMongoRepository.getById(collection, pastureId);
  }
}
module.exports = PastureRepositoryMongo;
