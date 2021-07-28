const animalsService = require("../../../application/animal/use-cases/index");
const AnimalRepositoryMongo = require("../../repositories/mongo/animal-repository");
const animalRepository = new AnimalRepositoryMongo();

module.exports = async (req, res, next) => {
  try {
    const sortedAnimals = await animalsService.sortedAnimalsByPasture(
      animalRepository
    );
    res.status(200).json({
      data: sortedAnimals,
      message: "animals sorted by pasture",
    });
  } catch (err) {
    next(err);
  }
};
