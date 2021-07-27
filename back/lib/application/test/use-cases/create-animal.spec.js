const AnimalRepository = require("../../../domain/animal/animal-repository");
const animalsMock = require("../fakes/animals-mock");
const animalServices = require("../../animal/use-cases/index");
const repository = new AnimalRepository();

describe("create-animal test", () => {
  beforeAll(() => {
    jest
      .spyOn(repository, "createAnimal")
      .mockImplementation(() => animalsMock[0].animalId);
  });
  it("Happypath create animal without pastureId succesfully", () => {
    //arrange
    const { breed, age, gender } = animalsMock[0];
    //act
    const createdAnimal = animalServices.createAnimal(
      { breed, age, gender },
      repository
    );
    //assert}
    expect(repository.createAnimal).toHaveBeenCalled();
    expect(createdAnimal).toBe(animalsMock[0].animalId);
  });
  it("Happypath create animal with pastureId succesfully", () => {
    const { pastureId, breed, age, gender } = animalsMock[0];
    const createdAnimal = animalServices.createAnimal(
      { pastureId, breed, age, gender },
      repository
    );
    expect(repository.createAnimal).toHaveBeenCalled();
    expect(createdAnimal).toBe(animalsMock[0].animalId);
  });
  it("Sadpath create animal with breed Errors", () => {
    const { breedFail, age, gender } = animalsMock[0];
    const breed = breedFail;
    try {
      animalServices.createAnimal({ age, gender }, repository);
    } catch (e) {
      expect(e).toEqual(new Error("Debes incluir la raza del animal"));
    }
    try {
      animalServices.createAnimal({ breed, age, gender }, repository);
    } catch (e) {
      expect(e).toEqual(new Error("La raza debe ser de tipo texto"));
    }
  });
  it("Sadpath create animal with age Errors", () => {
    const { breed, ageFail, gender } = animalsMock[0];
    const age = ageFail;
    try {
      animalServices.createAnimal({ breed, gender }, repository);
    } catch (e) {
      expect(e).toEqual(new Error("Debes incluir una edad del animal"));
    }
    try {
      animalServices.createAnimal({ breed, age, gender }, repository);
    } catch (e) {
      expect(e).toEqual(new Error("La edad debe ser numerica"));
    }
  });
  it("Sadpath create animal with gender Errors", () => {
    const { breed, age, genderFail } = animalsMock[0];
    const gender = genderFail;
    try {
      animalServices.createAnimal({ breed, age }, repository);
    } catch (e) {
      expect(e).toEqual(new Error("Debes ingresar el sexo del animal"));
    }
    try {
      animalServices.createAnimal({ breed, age, gender }, repository);
    } catch (e) {
      expect(e).toEqual(new Error("El sexo debe ser de tipo texto"));
    }
  });
});
