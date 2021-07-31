import {
    CREATE_ANIMAL,
    CREATE_ANIMAL_SUCCESS,
    CREATE_ANIMAL_ERROR,
    // LIST_ANIMAL,
    // LIST_SUCCESSFUL_ANIMAL,
    // LIST_ANIMAL_ERROR,
} from '../types/index.js'

const initialState = {
    animals: [],
    error: null
};

const animalReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_ANIMAL:
            return {
                ...state,
            };
        case CREATE_ANIMAL_SUCCESS:
            return {
                ...state,
                error: null,
                animals: [...state.animals, action.payload]
            };
        case CREATE_ANIMAL_ERROR:
            return { ...state, error: action.payload };
        default:
            return state;
    }
}

export default animalReducer;