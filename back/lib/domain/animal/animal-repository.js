class AnimalRepository{
    createAnimal(domainAnimal){
        throw new Error("Error metodo createAnimal no implemenado")
    }
    deleteAnimal(animalId){
        throw new Error("Error metodo deleteAnimal no implemenado")
    }
    getAllAnimals(){
        throw new Error("Error metodo getAllAnimal no implemenado")
    }
    updateAnimal(animalId, animal){
        throw new Error("Error metodo updateAnimal no implemenado")
    }
    getByAnimalId(animalId){
        throw new Error("Error metodo getByAnimalId no implemenado")  
    }
}
module.exports = AnimalRepository;