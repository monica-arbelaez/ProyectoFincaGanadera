const animalsService = require("../../../application/animal/use-cases/index");
const animalRepository = require("../../repositories/mongo/animal-repository")

module.exports = async (req, res, next) => {
    const { body: animal } = req;
    try {
      const createdAnimalId = await animalsService.createAnimal( animal , animalRepository);
      res.status(201).json({
        dataId: createdAnimalId,
        message: 'animal created',
      });
    } catch (err) {
      next(err);
    }
  }