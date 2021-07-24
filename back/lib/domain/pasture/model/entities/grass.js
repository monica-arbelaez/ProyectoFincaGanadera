const { uuid } = require('uuidv4');
const Density = require('../values/density');
class Grass{
    constructor(density){
        this.id = uuid();
        this.density = density;
    }

    updateDensity(density){
        if(density === undefined ){
            throw new Error("Para actualizar pasto debes ingresar una densidad")
        }
        if(!(density instanceof Density)){
            throw new Error("Para actualizar pasto debes introducir una instancia de Density")
        }
        this.density = density
    }
} 
module.exports = Grass;