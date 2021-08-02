const PastureRepository = require("../../../domain/pasture/pasture-repository");
const allPastureMock = require("../fakes/pasture-sort-length-mock");
const pastueServices = require("../../pasture/use-cases/index");
const repository = new PastureRepository();

describe("sort pasture by length test", () => {
    beforeAll(() => {
      jest.spyOn(repository, "getAllPastures").mockImplementation(() => allPastureMock.messyList);
    });
    it("Happypath pasture sorted by length", async() =>{

        const sortPasture = await pastueServices.sortPastureByLength(
            repository
        );
            

        expect(allPastureMock.listaOrdenada).toStrictEqual(sortPasture);
    });

})
