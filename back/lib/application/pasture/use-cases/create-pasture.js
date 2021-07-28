const Pasture = require("../../../domain/pasture/model/pasture");
const Area = require("../../../domain/pasture/model/values/area");
const Density = require("../../../domain/pasture/model/values/density");
const Length = require("../../../domain/pasture/model/values/length");
const Name = require("../../../domain/pasture/model/values/name");

module.exports = ( { id = null,name,area,density,length},  pastureRepository
    ) => {
      const pasture = new Pasture(
        null,
        new Area(area),
        new Name(name)
      );
      pasture.associateFence(new Length(length));
      pasture.associateGrass(new Density(density));
      return pastureRepository.createPasture(pasture);
    };
    