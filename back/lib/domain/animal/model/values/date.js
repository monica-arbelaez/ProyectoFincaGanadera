class Date {
    constructor(date) {
        // -> mm/dd/yyyy
        const validateDate = /^(?:0?[1-9]|1[1-2])([\-/.])(3[01]|[12][0-9]|0?[1-9])\1\d{4}$/
        if (date === undefined) {
            throw new Error("Debes tener una fecha de vacunación");
        }
        if (!date.match(validateDate)) {
            throw new Error("La fecha debe tener formato -> MM/DD/YYYY")
        }
        this.date = date;
    }
}

module.exports = Date;