const AnimalRepository = require("../../../infrastructure/repositories/mongo/animal-repository");
const allAnimalsMock = require("../fakes/sorted-by-pasture-mock");
const animalServices = require("../../animal/use-cases/index");
const repository = new AnimalRepository();

describe("vaccinate animals test", () => {
//   beforeAll(() => {
//     jest
//       .spyOn(repository, "getAllAnimals")
//       .mockImplementation(() => allAnimalsMock);
//   });
  it("Happypath animal vaccinated succesfully", async () => {
    //arrange
    const allPasturesIds = allAnimalsMock.map((animal) =>
      animal.pastureId ? animal.pastureId.id : animal.pastureId
    );
    const pasturesIds = [...new Set(allPasturesIds)];
    //act
    const filteredAnimals = await animalServices.vaccinateAnimal("61017c7d9d0c092538dfc3da", "false", repository
    );
    console.log(filteredAnimals)
  });
});
