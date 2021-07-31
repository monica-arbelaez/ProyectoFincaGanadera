const AnimalRepository = require("../../../infrastructure/repositories/mongo/animal-repository");
const { animalsMock } = require("../fakes/by-gender-mock");
const animalServices = require("../../animal/use-cases/index");
const repository = new AnimalRepository();

describe("filter animals by sex test", () => {
  beforeAll(() => {
    jest
      .spyOn(repository, "getAllAnimals")
      .mockImplementation(() => animalsMock);
  });
  it("Happypath animal filtered by gender succesfully", async () => {
    const allAnimals = await animalServices.getAnimals(repository);
    expect(allAnimals).toStrictEqual(animalsMock);
  });
});
