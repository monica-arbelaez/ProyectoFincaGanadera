const AnimalRepository = require("../../../domain/animal/animal-repository");
const allAnimalsMock = require("../fakes/sorted-by-pasture-mock");
const animalServices = require("../../animal/use-cases/index");
const repository = new AnimalRepository();

describe("create-animal test", () => {
  beforeAll(() => {
    jest
      .spyOn(repository, "getAllAnimal")
      .mockImplementation(() => allAnimalsMock);
  });
  it("Happypath create animal without pastureId succesfully", () => {
      
    const allPasturesIds = allAnimalsMock.map((animal) => animal.pastureId);
    const pasturesIds = [...new Set(allPasturesIds)];

    const sortedAnimals = animalServices.sortedAnimalsByPasture(repository);
    const returnedPastures = sortedAnimals.map((group) => group[0].pastureId);

    // const values = sortedAnimals.map((group)=>{
    //     return group.map((animal)=> group[0].pastureId === animal.pastureId)
    // })

    //assert
    expect(returnedPastures).toStrictEqual(pasturesIds)
    sortedAnimals.map((group) => {
      group.map((animal) => expect(group[0].pastureId).toBe(animal.pastureId));
    });
  });
});
