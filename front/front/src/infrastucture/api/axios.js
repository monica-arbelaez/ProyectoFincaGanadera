import axios from 'axios';

const clienteAxios = axios.create({
    baseURL: 'https://app-finca-ganadera.herokuapp.com/api/animals'
});

export default clienteAxios;