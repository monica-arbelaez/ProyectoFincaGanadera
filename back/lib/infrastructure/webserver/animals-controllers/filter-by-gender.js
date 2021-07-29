const animalsService = require("../../../application/animal/use-cases/index");
const AnimalRepositoryMongo = require("../../repositories/mongo/animal-repository");
const animalRepository = new AnimalRepositoryMongo();

module.exports = async (req, res, next) => {
  const gender = req.query.value;
  try {
    const filteredAnimalsByGender = await animalsService.filterAnimalsByGender(
      gender,
      animalRepository
    );
    res.status(200).json({
      data: filteredAnimalsByGender,
      message: `animals filtered by gender : ${gender}`,
    });
  } catch (err) {
    next(err);
  }
};
