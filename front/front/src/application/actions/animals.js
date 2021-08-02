import clienteAxios from "../../infrastucture/api/axios";
import Animal from "../domain/animal/model/Animal";
import Breed from "../domain/animal/model/values/breed";
import Gender from "../domain/animal/model/values/gender";
import Age from "../domain/animal/model/values/age";
import Swal from "sweetalert2";

import {
  CREATE_ANIMAL,
  CREATE_ANIMAL_SUCCESS,
  CREATE_ANIMAL_ERROR,
  LIST_ANIMAL,
  LIST_ANIMAL_SUCCESS,
  LIST_ANIMAL_ERROR,
  VACCINATE_ANIMAL,
  VACCINATE_ANIMAL_SUCCESS,
  VACCINATE_ANIMAL_ERROR,
} from "../types/index";

export function createAnimalAction(animal) {
  return async (dispatch) => {
    const { breed, gender, age } = animal;
    dispatch(createAnimal());
    try {
      const animal = getAnimal(breed, gender, age);
      const response = await clienteAxios.post("/create", animal);
      console.log(response);
      Swal.fire("Correcto", response.data.message, "success");
      dispatch(createAnimalSuccess(animal));
    } catch (error) {
      Swal.fire(error.message.error);
      dispatch(createAnimalError(error.message));
    }
  };
}

function getAnimal(breed, gender, age) {
  const newAnimal = new Animal(
    new Breed(breed),
    new Gender(gender),
    new Age(parseFloat(age))
  );
  const animal = {
    breed: newAnimal.breed.breed,
    gender: newAnimal.gender.gender,
    age: newAnimal.age.age,
  };
  return animal;
}

export function listAnimalsAction() {
  return async (dispatch) => {
    dispatch(listAnimal());
    try {
      const animals = await clienteAxios.get("/");
      dispatch(listAnimalSuccess(animals.data.data));
    } catch (error) {
      dispatch(listAnimalError(error.message));
    }
  };
}
export function vaccinateAnimalAction(animalId) {
  return async (dispatch) => {
    dispatch(vaccinateAnimal());
    try {
      const vaccinate = {
        isVaccinated: true,
      };
      const response = await clienteAxios.patch(
        `/${animalId}/vaccinate`,
        vaccinate
      );

      dispatch(vaccinateAnimalSuccess(response.data.dataId));
      Swal.fire("Correcto", response.data.message, "success");
    } catch (error) {
      dispatch(vaccinateAnimalError(error.message));
      Swal.fire(error);
    }
  };
}

export const createAnimal = () => ({
  type: CREATE_ANIMAL,
});

export const createAnimalSuccess = (animal) => ({
  type: CREATE_ANIMAL_SUCCESS,
  payload: animal,
});

export const createAnimalError = (error) => ({
  type: CREATE_ANIMAL_ERROR,
  payload: error,
});

export const listAnimal = () => ({
  type: LIST_ANIMAL,
});

export const listAnimalSuccess = (animals) => ({
  type: LIST_ANIMAL_SUCCESS,
  payload: animals,
});

export const listAnimalError = (error) => ({
  type: LIST_ANIMAL_ERROR,
  payload: error,
});

export const vaccinateAnimal = () => ({
  type: VACCINATE_ANIMAL,
});

export const vaccinateAnimalSuccess = (dataId) => ({
  type: VACCINATE_ANIMAL_SUCCESS,
  payload: dataId,
});

export const vaccinateAnimalError = (error) => ({
  type: VACCINATE_ANIMAL_ERROR,
  payload: error,
});
