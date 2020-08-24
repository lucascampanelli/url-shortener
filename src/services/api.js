import axios from 'axios';

const api = axios.create({
    baseURL: 'https://rel.ink/api/links/',
})

export default api;