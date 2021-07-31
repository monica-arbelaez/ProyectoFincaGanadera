const Pasture = require("../../../domain/pasture/model/pasture");
const Area = require("../../../domain/pasture/model/values/area");
const Density = require("../../../domain/pasture/model/values/density");
const Longitude = require("../../../domain/pasture/model/values/longitude");
const Name = require("../../../domain/pasture/model/values/name");

module.exports = ( { name,area,density,longitude},  pastureRepository
    ) => {
      const pasture = new Pasture(
        new Area(area),
        new Name(name)
      );
      pasture.associateFence(new Longitude(longitude));
      pasture.associateGrass(new Density(density));
      return pastureRepository.createPasture(pasture);
    };
    