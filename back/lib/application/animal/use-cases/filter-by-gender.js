const filterAnimalsByGender = async (gender,animalRepository) => {
    const animals = await animalRepository.getAllAnimals();
    console.log(animals)
    const filteredAnimals = animals.filter((animal)=>animal.dataSheet.gender.gender === gender)
    return filteredAnimals || []; 
  };
  
  module.exports = filterAnimalsByGender;
  