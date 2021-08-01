import pastureReducer from "../../../application/reducers/pastureReducer";
import {
    createPasture,
    createPastureSuccess,
    createPastureError,
    listPasture,
    listPastureSuccess,
    listPastureError
} from "../../../application/actions/pasture";

/**
 * TODO
 * Implemtar los test de:
 * Ordenar por longitud
 * Ordenar por densidad
 */
describe('reducer pasture test', () => {

    const pastureError = "No se pudo crear pasture";
    const listPasturesError = "No se pudieron enviar los datos a la lista";
    const initialState = {
        pastures: [],
        error: null
    };
    const pastureDummy = {
        area: 12,
        name: 'La Loma',
        longitude: 15,
        density: 120,
    }
    const listPastureDummys = [
        {
            area: 12,
            name: 'La Loma',
            longitude: 15,
            density: 120,
        },
        {
            area: 12,
            name: 'La Colina',
            longitude: 15,
            density: 120,
        }
    ]

    test('reducer CREATE_PASTURE', () => {
        const action = createPasture();
        const state = pastureReducer(initialState, action);
        expect(state).toEqual({ ...initialState });
    })

    test('reducer CREATE_PASTURE_SUCCESS', () => {
        const action = createPastureSuccess(pastureDummy);
        const state = pastureReducer(initialState, action);
        expect(state).toEqual({ ...initialState, pastures: [pastureDummy] })
    })

    test('reducer CREATE_PASTURE_ERROR', () => {
        const action = createPastureError(pastureError);
        const state = pastureReducer(initialState, action);
        expect(state).toEqual({ ...initialState, error: pastureError })
    })
    test('reducer LIST_PASTURES', () => {
        const action = listPasture();
        const state = pastureReducer(initialState, action);
        expect(state).toEqual({ ...initialState })
    })
    test('reducer LIST_PASTURES_SUCCESS', () => {
        const action = listPastureSuccess(listPastureDummys);
        const state = pastureReducer(initialState, action);
        expect(state).toEqual({ ...initialState, pastures: listPastureDummys })
    })
    test('reducer LIST_PASTURES_ERROR', () => {
        const action = listPastureError(listPasturesError);
        const state = pastureReducer(initialState, action);
        expect(state).toEqual({ ...initialState, error: listPasturesError })
    })
})