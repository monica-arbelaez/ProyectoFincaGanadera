import clienteAxios from '../../infrastucture/api';
import Animal from '../domain/model/Animal'
import {
    CREATE_ANIMAL,
    CREATE_ANIMAL_SUCCESSFUL,
    CREATE_ANIMAL_ERROR,
    LIST_ANIMAL,
    LIST_SUCCESSFUL_ANIMAL,
    LIST_ANIMAL_ERROR,
} from '../types/index'

//Crear un nuevo animal
export function createAnimalAction(animal) {
    return async (dispatch) => {
        const { breed, gender, age } = animal;
        const newAnimal = new Animal(breed, gender, parseFloat(age))
        dispatch(createAnimal());
        try {
            //Mandar el objeto a la base de decorators
            await clienteAxios.post('/create', newAnimal);
            dispatch(createAnimalSuccessful())
        } catch (error) {
            console.log(error)
            dispatch(createAnimalError(true))
        }
    }
}

export function listAnimalsAction() {
    return async (dispatch) => {
        dispatch(listAnimal());
        try {
            const animals = await clienteAxios.get('/animals');
            dispatch(listSuccessfulAnimal(animals));
        } catch (error) {
            dispatch(listAnimalError())
        }
    }
}

//Crear animal
const createAnimal = () => ({
    type: CREATE_ANIMAL,
    payload: true
})

const createAnimalSuccessful = (animal) => ({
    type: CREATE_ANIMAL_SUCCESSFUL,
    payload: animal
})

const createAnimalError = (estado) => ({
    type: CREATE_ANIMAL_ERROR,
    payload: estado
})

//Listar animales
const listAnimal = () => ({
    type: LIST_ANIMAL,
    payload: true
})

const listSuccessfulAnimal = (animals) => ({
    type: LIST_SUCCESSFUL_ANIMAL,
    payload: animals
})

const listAnimalError = () => ({
    type: LIST_ANIMAL_ERROR,
    payload: true
})