const animalsService = require("../../../application/animal/use-cases/index");
const AnimalRepositoryMongo = require("../../repositories/mongo/animal-repository");
const animalRepository = new AnimalRepositoryMongo();

module.exports = async (req, res, next) => {
    try {
        const animals = await animalsService.getAnimals(animalRepository);
        res.status(200).json({
          data: animals,
          message: 'animals listed',
        });
      } catch (err) {
        next(err);
      }
};
