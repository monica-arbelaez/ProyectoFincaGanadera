const pastureService = require("../../../application/pasture/use-cases/index");
const PastureRepositoryMongo = require("../../repositories/mongo/pasture-repository");
const pastureRepository = new PastureRepositoryMongo();

module.exports = async (req, res, next) => {
    try {
        const pastures = await pastureService.deletePastures(
            pastureRepository
        );
        res.status(200).json({
          message: "potrero fue eliminado",
        });
      } catch (err) {
        next(err);
      }
};
