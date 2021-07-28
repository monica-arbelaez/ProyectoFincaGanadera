const AnimalRepository = require("../../../infrastructure/repositories/mongo/animal-repository");
const allAnimalsMock = require("../fakes/sorted-by-pasture-mock");
const animalServices = require("../../animal/use-cases/index");
const repository = new AnimalRepository();

describe("filter animals by sex test", () => {
//   beforeAll(() => {
//     jest
//       .spyOn(repository, "getAllAnimals")
//       .mockImplementation(() => allAnimalsMock);
//   });
  it("Happypath animal filtered by gender succesfully", async () => {
    //arrange
    const allPasturesIds = allAnimalsMock.map((animal) =>
      animal.pastureId ? animal.pastureId.id : animal.pastureId
    );
    const pasturesIds = [...new Set(allPasturesIds)];
    //act
    const filteredAnimals = await animalServices.filterAnimalsByGender("ABC",
      repository
    );
    // const returnedPastures = sortedAnimals.map((group) => group[0].pastureId);
    // const extractObjectId = returnedPastures.map((pastureId) =>
    //   pastureId ? pastureId.id : pastureId
    // );

    // //assert
    // expect(extractObjectId).toStrictEqual(pasturesIds);
    // sortedAnimals.forEach((group) => {
    //   group.forEach((animal) =>
    //     expect(group[0].pastureId).toStrictEqual(animal.pastureId)
    //   );
    // });
  });
});
