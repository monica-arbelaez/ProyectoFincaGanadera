import clienteAxios from '../../infrastucture/api/axios';
// import Area from '../domain/pasture/model/values/area'
// import Length from '../domain/pasture/model/values/density'
// import Density from '../domain/pasture/model/values/length'
import {
    CREATE_PASTURE,
    CREATE_PASTURE_SUCCESS,
    CREATE_PASTURE_ERROR
} from '../types/index'

export function createPastureAction(pasture) {
    return async (dispatch) => {
        const { area, name, length, density } = pasture;
        dispatch(createPasture())
        try {
            const pasture = getPasture(parseFloat(area), name, parseFloat(length), parseFloat(density));
            await clienteAxios.post('/create-pasture', pasture);
            dispatch(createPastureSuccess(pasture))
        } catch (error) {
            dispatch(createPastureError(error.message))
        }
    }
}

function getPasture(area, name, length, density) {
    const pasture = {
        name,
        area,
        length,
        density
    }
    return pasture;
}

const createPasture = () => ({
    type: CREATE_PASTURE
})

const createPastureSuccess = (pasture) => ({
    type: CREATE_PASTURE_SUCCESS,
    payload: pasture
})

const createPastureError = (error) => ({
    type: CREATE_PASTURE_ERROR,
    payload: error
})

