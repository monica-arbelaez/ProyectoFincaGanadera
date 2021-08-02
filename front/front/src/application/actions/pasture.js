import clienteAxios from '../../infrastucture/api/axios';
import Pasture from '../domain/pasture/model/pasture';
import Area from '../domain/pasture/model/values/area'
import Length from '../domain/pasture/model/values/length'
import Density from '../domain/pasture/model/values/density'
import Name from '../domain/pasture/model/values/name';
import Swal from 'sweetalert2';

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
} from '../types/index'

export function createPastureAction(pasture) {
    return async (dispatch) => {
        const { area, name, longitude, density } = pasture;
        dispatch(createPasture())
        try {
            const pasture = getPasture(area, name, longitude, density);
            await clienteAxios.post('/create-pasture', pasture);
            dispatch(createPastureSuccess(pasture));
            setTimeout(() => {
                window.location.href = "/list-pasture";
            }, 500);
        } catch (error) {
            dispatch(createPastureError(error.message))
        }
    }
}

export function deletePastureAction(id) {
    return async (dispatch) => {
        dispatch(deletePasture())
        try {
            const response = await clienteAxios.delete('/delete-pasture/' + id);
            Swal.fire(
                'Correcto',
                response.data.message,
                'success'
            )
            dispatch(deletePastureSuccess());
            dispatch(listPastureAction())
        } catch (error) {
            Swal.fire(
                error.message,
            )
            dispatch(deletePastureError(error.message))
        }
    }
}

function getPasture(area, name, longitude, density) {
    const newPasture = new Pasture(
        new Area(parseFloat(area)),
        new Name(name),
        new Length(parseFloat(longitude)),
        new Density(parseFloat(density)))
    const pasture = {
        area: newPasture.area.area,
        name: newPasture.name.name,
        longitude: newPasture.longitude.longitude,
        density: newPasture.density.density,
    }
    return pasture;
}

export function listPastureAction() {
    return async (dispatch) => {
        dispatch(listPasture())
        try {
            const pastures = await clienteAxios.get('/list-pasture');
            dispatch(listPastureSuccess(pastures.data.data))
            Swal.fire(
                'Correcto',
                pastures.data.message,
                'success'
            )
        } catch (error) {
            Swal.fire(
                error.message,
            )
            dispatch(listPastureError(error.message))
        }
    }
}

export function sortPastureByLengthAction() {
    return async (dispatch) => {
        dispatch(pastureByLength());
        try {
            const pastures = await clienteAxios.get('/sort-by-length');
            dispatch(pastureByLengthSuccess(pastures.data.data))
            Swal.fire(
                'Correcto',
                pastures.data.message,
                'success'
            )
        } catch (error) {
            Swal.fire(
                error.message,
            )
            dispatch(pastureByLengthError(error.message))
        }
    }
}

export function sortPastureByDensityAction() {
    return async (dispatch) => {
        dispatch(pastureByDensity())
        try {
            const pastures = await clienteAxios.get('/sort-by-density');
            dispatch(pastureByDensitySuccess(pastures.data.data))
            Swal.fire(
                'Correcto',
                pastures.data.message,
                'success'
            )
        } catch (error) {
            Swal.fire(
                error.message,
            )
            dispatch(pastureByDensityError(error.message))
        }
    }
}

export const createPasture = () => ({
    type: CREATE_PASTURE
})

export const createPastureSuccess = (pasture) => ({
    type: CREATE_PASTURE_SUCCESS,
    payload: pasture
})

export const createPastureError = (error) => ({
    type: CREATE_PASTURE_ERROR,
    payload: error
})

export const deletePasture = () => ({
    type: DELETE_PASTURE
})

export const deletePastureSuccess = (pasture) => ({
    type: DELETE_PASTURE_SUCCESS,
    payload: pasture
})

export const deletePastureError = (error) => ({
    type: DELETE_PASTURE_ERROR,
    payload: error
})

export const listPasture = () => ({
    type: LIST_PASTURES
})

export const listPastureSuccess = (pastures) => ({
    type: LIST_PASTURES_SUCCESS,
    payload: pastures
})

export const listPastureError = (error) => ({
    type: LIST_PASTURES_ERROR,
    payload: error
})

export const pastureByLength = () => ({
    type: SORT_PASTURE_BY_LENGTH
})

export const pastureByLengthSuccess = (pastures) => ({
    type: SORT_PASTURE_BY_LENGTH_SUCCESS,
    payload: pastures
})

export const pastureByLengthError = (error) => ({
    type: SORT_PASTURE_BY_LENGTH_ERROR,
    payload: error
})

export const pastureByDensity = () => ({
    type: SORT_PASTURE_BY_DENSITY
})

export const pastureByDensitySuccess = (pastures) => ({
    type: SORT_PASTURE_BY_DENSITY_SUCCESS,
    payload: pastures
})

export const pastureByDensityError = (error) => ({
    type: SORT_PASTURE_BY_DENSITY_ERROR,
    payload: error
})