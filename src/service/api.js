import axios from 'axios';

const api = axios.create({
    baseURL: 'http:192.168.0.105:80'
});

export default api
