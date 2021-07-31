import clienteAxios from '../../infrastucture/api/axios';
import {
    LIST_ANIMAL_BY_PASTURE,
    LIST_ANIMAL_BY_PASTURE_SUCCESS,
    LIST_ANIMAL_BY_PASTURE_ERROR
} from '../types/index'

export function listAnimalByPastureAction() {
    return async (dispatch) => {
        dispatch(listAnimalByPasture())
        try {
            const data = await (await clienteAxios.get('/sort-by-pasture')).data;
            console.log(data.data);
            const listData = [];
            data.data.forEach((data) => {
                listData.push(data)
            });
            dispatch(listAnimalByPastureSuccess(listData))
        } catch (error) {
            console.log(error);
            dispatch(listAnimalByPastureError(error.message))
        }
    }
}

const listAnimalByPasture = () => ({
    type: LIST_ANIMAL_BY_PASTURE
})

const listAnimalByPastureSuccess = (animals) => ({
    type: LIST_ANIMAL_BY_PASTURE_SUCCESS,
    payload: animals
})

const listAnimalByPastureError = (error) => ({
    type: LIST_ANIMAL_BY_PASTURE_ERROR,
    payload: error
})