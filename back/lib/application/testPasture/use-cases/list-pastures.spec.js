const PastureRepository = require("../../../domain/pasture/pasture-repository");
const allPastureMock = require("../fakes/pasture-sort-density-mock");
const pastueServices = require("../../pasture/use-cases/index");
const repository = new PastureRepository();

describe("list pastures test", () => {
    beforeAll(() => {
      jest.spyOn(repository, "getAllPastures").mockImplementation(() => allPastureMock.listaOrdenada);
    });
    it("Happypath list all pastures", async() =>{

        const listPasture = await pastueServices.listPastures(
            repository
        );
        expect(allPastureMock.listaOrdenada).toStrictEqual(listPasture);
        expect(listPasture.length).toEqual(3)
    });

})