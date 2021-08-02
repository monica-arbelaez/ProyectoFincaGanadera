class Density {
  constructor(density) {
    if (density == null) {
      throw new Error("Debes incluir una densidad");
    }
    if (!(typeof density == "number")) {
      throw new Error("la densidad debe ser numerica");
    }
    if (density < 0 || density > 100) {
      throw new Error("Debes incluir una densidad entre 0 y 100");
    }
    this.density = density;
  }
}
export default Density;
