import axios from 'axios';

import env from "../../env.js"

const baseURL = env.API_BASE_URL;

const ApiService = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json'
    }
});

export default ApiService;