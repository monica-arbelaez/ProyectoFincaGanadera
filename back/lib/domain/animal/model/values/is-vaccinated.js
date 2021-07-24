class IsVaccinated {

    constructor(isVaccinated) {
        if (isVaccinated === undefined) {
            throw new Error("Debe ingresar si el animal esta vacunado")
        }
        if (!(typeof isVaccinated === "boolean")) {
            throw new Error("Debe ingresar true o false")
        }
        this.isVaccinated = isVaccinated;
    }
}
module.exports = IsVaccinated;