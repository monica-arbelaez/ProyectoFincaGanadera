const { uuid } = require('uuidv4');
const Longitude = require("../values/longitude")
class Fence{
    constructor(longitude){
        this.id = uuid();
        this.longitude = longitude;
    }

    updateLength(longitude){
        if(longitude === undefined ){
            throw new Error("Para actualizar debes ingresar una longitud")
        }
        if(!(longitude instanceof Longitude)){
            throw new Error("Para actualizar cerca debe introducir una instancia de Length")
        }
        this.longitude = longitude
    }
} 
module.exports = Fence;