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
  