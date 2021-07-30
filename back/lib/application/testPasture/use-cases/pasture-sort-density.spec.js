const PastureRepository = require("../../../domain/pasture/pasture-repository");
const allPastureMock = require("../../testPasture/fakes/pasture-sort-mock");
const pastueServices = require("../../pasture/use-cases/index");
const repository = new PastureRepository();

describe("sort animals by pastureId test", () => {
    beforeAll(() => {
      jest.spyOn(repository, "getAllPastures").mockImplementation(() => allPastureMock.messyList);
    });
    it("Happypath pasture sorted by density", async() =>{

        const sortPasture = await pastueServices.sortPastureByDensity(
            repository
        );
            

        expect(allPastureMock.messyList).toStrictEqual(sortPasture);
    });

})
