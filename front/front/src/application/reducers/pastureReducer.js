import {
    CREATE_PASTURE,
    CREATE_PASTURE_SUCCESS,
    CREATE_PASTURE_ERROR,
    DELETE_PASTURE,
    DELETE_PASTURE_SUCCESS,
    DELETE_PASTURE_ERROR,
    LIST_PASTURES,
    LIST_PASTURES_SUCCESS,
    LIST_PASTURES_ERROR,
    SORT_PASTURE_BY_LENGTH,
    SORT_PASTURE_BY_LENGTH_SUCCESS,
    SORT_PASTURE_BY_LENGTH_ERROR,
    SORT_PASTURE_BY_DENSITY,
    SORT_PASTURE_BY_DENSITY_SUCCESS,
    SORT_PASTURE_BY_DENSITY_ERROR
} from '../types/index.js'

const initialState = {
    pastures: [],
    error: null
};

const pastureReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_PASTURE:
            return {
                ...state,
            };
        case CREATE_PASTURE_SUCCESS:
            return {
                ...state,
                error: null,
                pastures: [...state.pastures, action.payload]
            };
        case CREATE_PASTURE_ERROR:
            return { ...state, error: action.payload };
        case DELETE_PASTURE:
            return {
                ...state,
            };
        case DELETE_PASTURE_SUCCESS:
            return {
                ...state,
                error: null
            };
        case DELETE_PASTURE_ERROR:
            return { ...state, error: action.payload };
        case LIST_PASTURES:
            return {
                ...state,
            };
        case LIST_PASTURES_SUCCESS:
            return {
                ...state,
                error: null,
                pastures: action.payload
            };
        case LIST_PASTURES_ERROR:
            return { ...state, error: action.payload };
        case SORT_PASTURE_BY_LENGTH:
            return {
                ...state,
            };
        case SORT_PASTURE_BY_LENGTH_SUCCESS:
            return {
                ...state,
                error: null,
                pastures: action.payload
            };
        case SORT_PASTURE_BY_LENGTH_ERROR:
            return { ...state, error: action.payload };
        case SORT_PASTURE_BY_DENSITY:
            return {
                ...state,
            };
        case SORT_PASTURE_BY_DENSITY_SUCCESS:
            return {
                ...state,
                error: null,
                pastures: action.payload
            };
        case SORT_PASTURE_BY_DENSITY_ERROR:
            return { ...state, error: action.payload };
        default:
            return state;
    }
}

export default pastureReducer;