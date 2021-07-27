import axios from 'axios';

const PastureAxios = axios.create({
    baseURL: 'http://localhost:4000'
});

export default PastureAxios;