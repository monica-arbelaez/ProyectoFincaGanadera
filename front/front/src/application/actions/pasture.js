import clienteAxios from '../../infrastucture/api/axios';
import Pasture from '../domain/pasture/model/pasture';
import Area from '../domain/pasture/model/values/area'
import Length from '../domain/pasture/model/values/length'
import Density from '../domain/pasture/model/values/density'
import Name from '../domain/pasture/model/values/name';
import {
    CREATE_PASTURE,
    CREATE_PASTURE_SUCCESS,
    CREATE_PASTURE_ERROR
} from '../types/index'

export function createPastureAction(pasture) {
    return async (dispatch) => {
        const { area, name, longitude, density } = pasture;
        dispatch(createPasture())
        try {
            const pasture = getPasture(area, name, longitude, density);
            await clienteAxios.post('/create-pasture', pasture);
            dispatch(createPastureSuccess(pasture))
        } catch (error) {
            console.log(error);
            dispatch(createPastureError(error.message))
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
        length: newPasture.longitude.longitude,
        density: newPasture.density.density,
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

