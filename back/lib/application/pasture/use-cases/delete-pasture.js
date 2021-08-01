const deletePastures = async function(pastureRepository, pastureId) {
    console.log(pastureId)
    const deletePature = await pastureRepository.deletePasture(pastureId) 
    return deletePature
    } 
module.exports = deletePastures;

// module.exports = function deletePastures() {
//     console.log(pastureId)
//     return async function deletePasture(pastureRepository, pastureId) {
//         await pastureRepository.deletePasture( {pastureId: pastureId})
        
//     }
// }

// const deletePastures = async(pastureRepository, pastureId)=>{
//     const deletedPasture = await pastureRepository.deletePasture({_id : id});
//     console.log(pastureId)
//     return deletedPasture;
// }

// module.exports = deletePastures;