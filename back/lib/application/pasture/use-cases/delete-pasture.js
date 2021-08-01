const deletePastures = async()=> {
    return async function deletePasture(_id) {
        await pasture.deletePasture( _id)
    }
} 
module.exports = deletePastures;

