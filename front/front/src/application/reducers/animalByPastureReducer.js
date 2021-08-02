import {
    LIST_ANIMAL_BY_PASTURE,
    LIST_ANIMAL_BY_PASTURE_SUCCESS,
    LIST_ANIMAL_BY_PASTURE_ERROR
} from '../types/index.js'

const initialState = {
    animalsByPasture: [],
    error: null
}

const animalsByPasture = (state = initialState, action) => {
    switch (action.type) {
        case LIST_ANIMAL_BY_PASTURE:
            return {
                ...state,
            };
        case LIST_ANIMAL_BY_PASTURE_SUCCESS:
            return {
                ...state,
                error: null,
                animalsByPasture: action.payload
            };
        case LIST_ANIMAL_BY_PASTURE_ERROR:
            return { ...state, error: action.payload };
        default:
            return state;
    }
}

export default animalsByPasture;