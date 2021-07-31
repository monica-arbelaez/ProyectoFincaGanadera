const getAnimals =async (repository) => {
    const animals = await repository.getAllAnimals(repository);
    return animals || [];
  }
module.exports = getAnimals;
