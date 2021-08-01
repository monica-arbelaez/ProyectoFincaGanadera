const pastureService = require("../../../application/pasture/use-cases/index");
const PastureRepositoryMongo = require("../../repositories/mongo/pasture-repository");
const pastureRepository = new PastureRepositoryMongo();

module.exports = async (req, res, next) => {
    try {
        const pastures = await pastureService.deletePastures(
           pastureRepository, req.params.pastureId
        );
        res.status(200).json({
          data: pastures,
          message: "potrero fue eliminado",
        });
      } catch (err) {
        next(err);
      }
};
