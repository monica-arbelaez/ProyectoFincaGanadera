import AnimalAxios from '../../infrastucture/api/Animal';
import Animal from '../domain/model/Animal'
import Breed from '../domain/model/values/breed';
import Gender from '../domain/model/values/gender';
import Age from '../domain/model/values/age';

import {
    CREATE_ANIMAL,
    CREATE_ANIMAL_SUCCESSFUL,
    CREATE_ANIMAL_ERROR,
    LIST_ANIMAL,
    LIST_SUCCESSFUL_ANIMAL,
    LIST_ANIMAL_ERROR,
} from '../types/index'



export function createAnimalAction(animal) {
    return async (dispatch) => {
        const { breed, gender, age } = animal;
        dispatch(createAnimal());
        try {
            const animal = getAnimal(breed, gender, age);
            await AnimalAxios.post('/create', animal);
            dispatch(createAnimalSuccess(animal))
        } catch (error) {
            dispatch(createAnimalError(error.message))
        }
    }
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
        age: newAnimal.age.age
    };
    return animal;
}

export function listAnimalsAction() {
    return async (dispatch) => {
        dispatch(listAnimal());
        try {
            const animals = await AnimalAxios.get('/animals');
            dispatch(listSuccessAnimal(animals));
        } catch (error) {
            dispatch(listAnimalError(error.message));
        }
    }
}

export const createAnimal = () => ({
    type: CREATE_ANIMAL
})

export const createAnimalSuccess = (animal) => ({
    type: CREATE_ANIMAL_SUCCESSFUL,
    payload: animal
})

export const createAnimalError = (error) => ({
    type: CREATE_ANIMAL_ERROR,
    payload: error
})

export const listAnimal = () => ({
    type: LIST_ANIMAL
})

export const listSuccessAnimal = (animals) => ({
    type: LIST_SUCCESSFUL_ANIMAL,
    payload: animals
})

export const listAnimalError = (error) => ({
    type: LIST_ANIMAL_ERROR,
    payload: error
})