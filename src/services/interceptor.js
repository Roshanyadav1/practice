import axios from 'axios';

const api = axios.create();

api.interceptors.request.use(config => {
    config.baseURL = config.baseURL || 'http://localhost:3000';
    return config;
});

export default api;