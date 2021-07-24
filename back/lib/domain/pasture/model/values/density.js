class Density {
  constructor(density) {
    if (density == null) {
      throw new Error("Debes incluir una densidad");
    }
    if (!(typeof density == "number")) {
      throw new Error("la densidad debe ser numerica");
    }
    if (density < 0 || density > 100) {
      throw new Error("Debes incluir una densidad entre cero y cien");
    }
    this.density = density;
  }
}
module.exports = Density;
