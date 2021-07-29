class Length {
    constructor(length) {
      if (length == null) {
          throw new Error("Debes incluir una longitud");
      }
      if(!(typeof length == "number")){
          throw new Error ("La longitud debe ser numerica")
      }
      if (length <= 0) {
          throw new Error("Debes incluir una longitud mayor que cero");
      }
      this.length = length;
    }
  }
  module.exports = Length;