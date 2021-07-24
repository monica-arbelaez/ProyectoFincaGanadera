class AgreggateId {
    constructor(id) {
        if (id === undefined) {
            throw new Error("el id del agregado no puede ser undefined")
        }
        if (!(typeof id == "string")) {
            throw new Error("La id del agregado debe ser de tipo texto")
        }
        this.id = id;
    }
}

module.exports = AgreggateId;