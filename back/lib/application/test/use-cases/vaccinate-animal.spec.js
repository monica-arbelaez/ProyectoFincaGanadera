const AnimalRepository = require("../../../infrastructure/repositories/mongo/animal-repository");
const allAnimalsMock = require("../fakes/sorted-by-pasture-mock");
const animalServices = require("../../animal/use-cases/index");
const repository = new AnimalRepository();

describe("vaccinate animals test", () => {
  beforeAll(() => {
    jest
      .spyOn(repository, "updateAnimal")
      .mockImplementation(() => "61017e93eab29f45107fc85a");
  });
  it("Happypath animal vaccinated succesfully", async () => {
    const vaccinate = { isVaccinated: false };

    const vaccinatedAnimalId = await animalServices.vaccinateAnimal(
      "61017e93eab29f45107fc85a",
      vaccinate,
      repository
    );
    expect(vaccinatedAnimalId).toBe("61017e93eab29f45107fc85a");
  });
});
