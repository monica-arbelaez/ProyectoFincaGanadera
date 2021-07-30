const sortPastureByLength = async (pastureRepository)=>{
    const pastures = await pastureRepository.getAllPastures();
    const sortedPastures = pastures.sort((aPature,bPasture)=>{
        return aPature.fence.length.length - bPasture.fence.length.length
    });
    return sortedPastures;
   
};
module.exports = sortPastureByLength;