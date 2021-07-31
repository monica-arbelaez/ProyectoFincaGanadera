class Age {
    constructor(age) {
        if (age === undefined) {
            throw new Error("Debes incluir una edad del animal")
        }
        if (!(typeof age == "number")) {
            throw new Error("La edad debe ser numerica")
        }
        if (age <= 0) {
            throw new Error("Debes incluir un edad mayor que cero");
        }
        this.age = age;
    }
}

export default Age;