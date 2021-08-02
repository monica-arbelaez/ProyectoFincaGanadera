class Area {
  constructor(area) {
    if (area == null) {
      throw new Error("Debes incluir un area");
    }
    if (!(typeof area == "number")) {
      throw new Error("El area debe ser numerica")
    }
    if (area <= 0) {
      throw new Error("Debes incluir un area mayor que cero");
    }
    this.area = area;
  }
}
export default Area;
