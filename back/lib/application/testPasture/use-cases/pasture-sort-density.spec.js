const PastureRepository = require("../../../domain/pasture/pasture-repository");
const allPastureMock = require("../fakes/pasture-sort-density-mock");
const pastueServices = require("../../pasture/use-cases/index");
const repository = new PastureRepository();

describe("sort pasture by density test", () => {
    beforeAll(() => {
      jest.spyOn(repository, "getAllPastures").mockImplementation(() => allPastureMock.messyList);
    });
    it("Happypath pasture sorted by density", async() =>{

        const sortPasture = await pastueServices.sortPastureByDensity(
            repository
        );
            

        expect(allPastureMock.listaOrdenada).toStrictEqual(sortPasture);
    });

})
