import Area from './values/area'
import Name from './values/name'
import Leght from './values/length'
import Density from './values/density'

class Pasture {
    constructor(area, name, longitude, density) {
        this.area = area;
        this.name = name;
        this.longitude = longitude;
        this.density = density;
    }
}

export default Pasture;

function validateArea(area) {
    if (!(area instanceof Area)) {
        throw new Error("Para agregar area debe introducir una instancia de Area")
    }
    return area;
}
function validateName(name) {
    if (!(name instanceof Name)) {
        throw new Error("Para agregar un nombre debe introducir una instancia de Name")
    }
    return name;
}

function validateLenght(longitude) {
    if (!(longitude instanceof Leght)) {
        throw new Error("Para agregar una longitud debe introducir una instancia de Leght")
    }
    return longitude;
}

function validateDensity(density) {
    if (!(density instanceof Density)) {
        throw new Error("Para agregar una densidad debe introducir una instancia de Density")
    }
    return density;
}

