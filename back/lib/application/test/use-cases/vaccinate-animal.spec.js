const AnimalRepository = require("../../../infrastructure/repositories/mongo/animal-repository");
const animalServices = require("../../animal/use-cases/index");
const repository = new AnimalRepository();

describe("vaccinate animals test", () => {
  beforeAll(() => {
    jest
      .spyOn(repository, "getByAnimalId")
      .mockImplementation(() => "610195efa854860015f37161")
    jest
      .spyOn(repository, "updateAnimal")
      .mockImplementation(() => "610195efa854860015f37161");
  });
  it("Happypath animal vaccinated succesfully", async () => {
    const vaccinate = { isVaccinated: false };

    const vaccinatedAnimalId = await animalServices.vaccinateAnimal(
      "610195efa854860015f37161",
      vaccinate,
      repository
    );
    expect(vaccinatedAnimalId).toBe("610195efa854860015f37161");
  });
});
