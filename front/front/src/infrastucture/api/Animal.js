import axios from 'axios';

const AnimalAxios = axios.create({
    baseURL: 'https://finca-ganadera.herokuapp.com/api/animals'
});

export default AnimalAxios;