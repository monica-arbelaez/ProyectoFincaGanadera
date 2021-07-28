class Name{
    constructor(name){
        if (name === undefined) {
            throw new Error("Debes ingresar el nombre del potrero");
        }
        if (!(typeof name == "string")) {
            throw new Error("El nombre debe ser de tipo texto")
        }
        this.name = name.toUpperCase();

    }
}
module.exports = Name;