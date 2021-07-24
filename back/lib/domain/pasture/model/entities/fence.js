const { uuid } = require('uuidv4');
const Length = require("../values/length")
class Fence{
    constructor(length){
        this.id = uuid();
        this.length = length;
    }

    updateLength(length){
        if(length === undefined ){
            throw new Error("Para actualizar debes ingresar una longitud")
        }
        if(!(length instanceof Length)){
            throw new Error("Para actualizar cerca debe introducir una instancia de Length")
        }
        this.length = length
    }
} 
module.exports = Fence;