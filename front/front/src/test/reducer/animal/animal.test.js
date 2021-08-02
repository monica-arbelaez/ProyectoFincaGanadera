import animalReducer from "../../../application/reducers/animalReducer";
import {
    createAnimal,
    createAnimalSuccess,
    createAnimalError,
    listAnimal,
    listAnimalSuccess,
    listAnimalError
} from "../../../application/actions/animals.js";

/**
 * TODO
 */
describe('reducer animal test', () => {

    const animalError = "No se pudo crear animal";
    const animalsError = "No se pudieron enviar los datos a la lista";
    const initialState = {
        animals: [],
        error: null
    };
    const animalDummy = {
        breed: 'NORMANDO',
        gender: 'MALE',
        age: 14
    };
    const listAnimalDummys = [
        {
            breed: 'NORMANDO',
            gender: 'MALE',
            age: 14
        },
        {
            breed: 'NORMANDO',
            gender: 'FEMALE',
            age: 18
        }
    ]

    test('reducer CREATE_ANIMAL', () => {
        const action = createAnimal();
        const state = animalReducer(initialState, action);
        expect(state).toEqual({ ...initialState });
    })

    test('reducer CREATE_ANIMAL_SUCCESS', () => {
        const action = createAnimalSuccess(animalDummy);
        const state = animalReducer(initialState, action);
        expect(state).toEqual({ ...initialState, animals: [animalDummy] })
    })

    test('reducer CREATE_ANIMAL_ERROR', () => {
        const action = createAnimalError(animalError);
        const state = animalReducer(initialState, action);
        expect(state).toEqual({ ...initialState, error: animalError })
    })
    test('reducer LIST_ANIMAL', () => {
        const action = listAnimal();
        const state = animalReducer(initialState, action);
        expect(state).toEqual({ ...initialState })
    })
    test('reducer LIST_ANIMAL_SUCCESS', () => {
        const action = listAnimalSuccess(listAnimalDummys);
        const state = animalReducer(initialState, action);
        expect(state).toEqual({ ...initialState, animals: listAnimalDummys })
    })
    test('reducer LIST_ANIMAL_ERROR', () => {
        const action = listAnimalError(animalsError);
        const state = animalReducer(initialState, action);
        expect(state).toEqual({ ...initialState, error: animalsError })
    })
})