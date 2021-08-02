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
} from '../types/index.js'

const initialState = {
    animals: [],
    error: null,
    dataId: null
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
        case LIST_ANIMAL:
            return {
                ...state,
            };
        case LIST_ANIMAL_SUCCESS:
            return {
                ...state,
                error: null,
                animals: action.payload
            };
        case LIST_ANIMAL_ERROR:
            return { ...state, error: action.payload };
            case VACCINATE_ANIMAL:
            return {
                ...state,
            };
        case VACCINATE_ANIMAL_SUCCESS:
            return {
                ...state,
                error: null,
                dataId: action.payload
            };
        case VACCINATE_ANIMAL_ERROR:
            return { ...state, error: action.payload };
        default:
            return state;

    }
}

export default animalReducer;