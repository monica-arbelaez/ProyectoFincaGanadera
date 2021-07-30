const sortPastureByDensity = async (pastureRepository)=>{
    const pastures = await pastureRepository.getAllPastures();
    const sortedPastures = pastures.sort((aPasture,bPasture)=>{
        return aPasture.grass.density.density - bPasture.grass.density.density
    });
    return sortedPastures;
   
};
module.exports = sortPastureByDensity;