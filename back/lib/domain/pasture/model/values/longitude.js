class Longitude {
    constructor(Longitude) {
      if (Longitude == null) {
          throw new Error("Debes incluir una longitud");
      }
      if(!(typeof Longitude == "number")){
          throw new Error ("La longitud debe ser numerica")
      }
      if (Longitude <= 0) {
          throw new Error("Debes incluir una longitud mayor que cero");
      }
      this.Longitude = Longitude;
    }
  }
  module.exports = Longitude 