import axios from 'axios';

const clienteAxios = axios.create({
    baseURL: 'https://finca-ganadera.herokuapp.com/api/animals'
});

export default clienteAxios;