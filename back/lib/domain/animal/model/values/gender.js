class Gender {
    constructor(gender) {
        if (date === undefined) {
            throw new Error("Debes ingresar el sexo del animal");
        }
        if (!(typeof gender == "string")) {
            throw new Error("El sexo debe ser de tipo texto")
        }
        this.gender = gender.toUpperCase();
    }
}