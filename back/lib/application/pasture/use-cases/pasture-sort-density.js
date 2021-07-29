const sortPastureByDensity = async (pastureRepository)=>{
    const pastures = await pastureRepository.getAllPastures();
    const sortedPastures = pastures.sort((aPature,bPasture)=>{
        return aPature.grass.density.density - bPasture.grass.density.density
    })
    return sortedPastures;
   
};
module.exports = sortPastureByDensity;