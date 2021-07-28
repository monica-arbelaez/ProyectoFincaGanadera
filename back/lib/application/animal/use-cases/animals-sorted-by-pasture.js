const sortedAnimalsByPasture = async (animalRepository) => {
  const animals = await animalRepository.getAllAnimals();
  const allPasturesIds = animals.map((animal) => {
    if (animal.pastureId) {
      return animal.pastureId.id;
    }
    return animal.pastureId;
  });
  const pasturesIds = [...new Set(allPasturesIds)];
  const orderedAnimals = pasturesIds.map((pastureId) => {
    return animals.filter((animal) => {
      if (animal.pastureId) {
        return animal.pastureId.id === pastureId;
      }
      return animal.pastureId === pastureId;
    });
  });
  return orderedAnimals || [];
};

module.exports = sortedAnimalsByPasture;
