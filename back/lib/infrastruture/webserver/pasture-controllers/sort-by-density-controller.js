const pastureService = require("../../../application/pasture/use-cases/index");
const PastureRepositoryMongo = require("../../repositories/mongo/pasture-repository");
const pastureRepository = new PastureRepositoryMongo();

module.exports = async (req, res, next) => {
    try {
        const sortePasture = await pastureService.sortPastureByDensity(
            pastureRepository
        );
        res.status(200).json({
          data: sortePasture,
          message: "potreros ordenados por densidad",
        });
      } catch (err) {
        next(err);
      }
};

