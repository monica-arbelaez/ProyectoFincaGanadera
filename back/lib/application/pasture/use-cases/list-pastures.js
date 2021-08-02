const listPasture = async (pastureRepository)=>{
    const pastures = await pastureRepository.getAllPastures();
    return pastures
};
module.exports = listPasture;