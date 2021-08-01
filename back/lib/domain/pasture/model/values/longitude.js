class Longitude {
    constructor(longitude) {
      if (longitude == null) {
          throw new Error("Debes incluir una longitud");
      }
      if(!(typeof longitude == "number")){
          throw new Error ("La longitud debe ser numerica")
      }
      if (longitude <= 0) {
          throw new Error("Debes incluir una longitud mayor que cero");
      }
      this.longitude = longitude;
    }
  }
  module.exports = Longitude 