class Name {
    constructor(name) {
        if (name == null) {
            throw new Error("Debes incluir un nombre");
        }
        if (!(typeof name == "string")) {
            throw new Error("El nombre debe ser de tipo texto")
        }
        this.name = name;
    }
}

export default Name;