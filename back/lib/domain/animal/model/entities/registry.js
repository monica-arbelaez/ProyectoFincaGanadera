const { uuid } = require('uuidv4');
const IsVaccinated = require("../values/is-vaccinated")
class Registry {
    constructor(date, isVaccinated) {
        this.id = uuid();
        this.date = date;
        this.isVaccinated = isVaccinated;
    }

    updateVaccinate(newVaccinated) {
        if (newVaccinated === undefined) {
            throw new Error("Para actualizar debes ingresar el estado de vacunación")
        }
        if (!(newVaccinated instanceof IsVaccinated)) {
            throw new Error("Para actualizar la vacuna debe introducir una instancia de IsVaccinated")
        }
        this.isVaccinated = newVaccinated;
    }
}
module.exports = Registry;