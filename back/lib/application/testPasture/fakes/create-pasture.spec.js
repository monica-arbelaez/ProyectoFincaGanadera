const PastureRepository = require("../../../domain/pasture/pasture-repository");
const createpastureMock = require("./create-pasture-mock");
const pastureServices = require("../../pasture/use-cases/index");
const repository = new PastureRepository();

describe("create-pasture test",()=>{
    beforeAll(() => {
        jest
          .spyOn(repository, "createPasture")
          .mockImplementation(() => createpastureMock[0].pastureId);
    });it("Happypath create pasture", () => {
    //arrange
    const { area, name, length, density} = createpastureMock[0];
    //act
    const createPasture = pastureServices.createPasture(
      { area, name, length, density},
      repository
    );
    //assert}
    expect(repository.createPasture).toHaveBeenCalled();
    expect(createPasture).toBe(createpastureMock[0].pastureId);
    });
    it("Sadpath create pasture", () => {
        const { areaFail, name, length, density } = createpastureMock[1];
        const area = areaFail;
        try {
          pastureServices.createPasture({ name, length, density }, repository);
        } catch (e) {
           expect(e).toEqual(new Error("Debes incluir un area"));
        }
        try {
            pastureServices.createPasture({ area, name, length, density }, repository);
          } catch (e) {
            expect(e).toEqual(new Error("El area debe ser numerica"));
          }
    });
 
});