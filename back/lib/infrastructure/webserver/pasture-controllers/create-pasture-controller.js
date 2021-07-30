const pastureServices = require("../../../application/pasture/use-cases/index");
const PastureRepository = require("../../repositories/mongo/pasture-repository");
const pastureRepository = new PastureRepository();


module.exports = async (req, res, next) => {
    console.log("prueba")
    const { body: pasture } = req;
    try {
      console.log(pasture);
      const createdPastureId = await pastureServices.createPasture(
        pasture,
        pastureRepository
      );
      res.status(201).json({
        dataId: createdPastureId,
        message: "pasture created",
      });
    } catch (err) {
      next(err);
    }
  };