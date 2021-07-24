const { uuid } = require('uuidv4');
const Age = require("../values/age")
class DataSheet {
    constructor(breed, age, gender) {
        this.id = uuid();
        this.breed = breed;
        this.age = age;
        this.gender = gender;
    }

    updateAge(newAge) {
        if (newAge === undefined) {
            throw new Error("Para actualizar debes ingresar la edad")
        }
        if (!(newAge instanceof Age)) {
            throw new Error("Para actualizar cerca debe introducir una instancia de Age")
        }
        this.age = newAge;
    }
}
module.exports = DataSheet;