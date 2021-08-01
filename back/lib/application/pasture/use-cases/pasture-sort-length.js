// const sortPastureByLength = async (pastureRepository)=>{
//     const pastures = await pastureRepository.getAllPastures();
//     console.log(pastures.fence.longitude.longitude)
//     const sortedPastures = pastures.sort((aPature, bPasture)=>{
//         return aPature.fence.longitude.longitude - bPasture.fence.longitude.longitude
//     });
//     return sortedPastures;
// };
// module.exports = sortPastureByLength;

const sortPastureByLength = async (pastureRepository)=>{
    const pastures = await pastureRepository.getAllPastures();
    const sortedPastures = pastures.sort((aPasture,bPasture)=>{
        return aPasture.fence.longitude.longitude - bPasture.fence.longitude.longitude
    });
    return sortedPastures;
   
};
module.exports = sortPastureByLength;