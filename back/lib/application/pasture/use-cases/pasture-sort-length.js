const sortPastureByLength = async (pastureRepository)=>{
    const pastures = await pastureRepository.getAllPastures();
    const sortedPastures = pastures.sort((aPature,bPasture)=>{
        return aPature.fence.longitude.longitude - bPasture.fence.longitude.longitude
    });
    return sortedPastures;
   
};
module.exports = sortPastureByLength;