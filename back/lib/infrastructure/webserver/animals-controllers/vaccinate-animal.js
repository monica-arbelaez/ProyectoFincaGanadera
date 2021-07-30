const AnimalRepositoryMongo = require("../../repositories/mongo/animal-repository");
const animalsService = require("../../../application/animal/use-cases/index");
const animalRepository = new AnimalRepositoryMongo();

module.exports = async (req, res, next) => {
  const { animalId } = req.params;
  const { body: vaccinateAnimal } = req;
  try {
    const vaccinatedAnimal = await animalsService.vaccinateAnimal(
      animalId,
      vaccinateAnimal,
      animalRepository,
    );
    res.status(200).json({
      dataId: vaccinatedAnimal,
      message: "vaccinated updated",
    });
  } catch (err) {
    next(err);
  }
};
