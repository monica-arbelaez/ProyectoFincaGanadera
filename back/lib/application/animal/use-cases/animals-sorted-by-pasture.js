const sortedAnimalsByPasture = (animalRepository) => {
  const animals = animalRepository.getAllAnimal();
  const allPasturesIds = animals.map((animal) => animal.pastureId);
  const pasturesIds = [...new Set(allPasturesIds)];
  const orderedAnimals = pasturesIds.map((pastureId) => {
    return animals.filter((animal) => animal.pastureId == pastureId);
  });
  return orderedAnimals || [];
};

module.exports = sortedAnimalsByPasture;
