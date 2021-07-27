import {
    CREATE_ANIMAL,
    CREATE_ANIMAL_SUCCESSFUL,
    CREATE_ANIMAL_ERROR,
    // LIST_ANIMAL,
    // LIST_SUCCESSFUL_ANIMAL,
    // LIST_ANIMAL_ERROR,
} from '../types/index.js'

const initialState = {
    animals: [],
    error: null,
    loading: false,
};

const animalReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_ANIMAL:
            return {
                ...state,
                loading: action.payload
            };
        case CREATE_ANIMAL_SUCCESSFUL:
            return {
                ...state,
                loading: false,
                error: null,
                animals: [...state.animals, action.payload]
            };
        case CREATE_ANIMAL_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
}

export default animalReducer;