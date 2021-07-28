import {
    CREATE_PASTURE,
    CREATE_PASTURE_SUCCESS,
    CREATE_PASTURE_ERROR
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
        default:
            return state;
    }
}

export default pastureReducer;