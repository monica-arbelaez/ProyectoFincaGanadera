const pastureService = require("../../../application/pasture/use-cases/index");
const PastureRepositoryMongo = require("../../repositories/mongo/pasture-repository");
const pastureRepository = new PastureRepositoryMongo();

module.exports = async (req, res, next) => {
    try {
        const pastures = await pastureService.listPastures(
            pastureRepository
        );
        res.status(200).json({
          data: pastures,
          message: "potreros listados con exito",
        });
      } catch (err) {
        next(err);
      }
};