class Breed {

    constructor(breed) {
        if (breed === undefined) {
            throw new Error("Debes incluir la raza del animal")
        }
        if (!(typeof breed == "string")) {
            throw new Error("La raza debe ser de tipo texto")
        }
        this.breed = breed;
    }
}

export default Breed;