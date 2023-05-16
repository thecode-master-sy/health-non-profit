import axios from 'axios';

const baseURL = 'https://blog-api-2hen.onrender.com'

export const Axios = axios.create({
    baseURL: baseURL
});

export const AxiosAuth = axios.create({
    baseURL: baseURL,

    withCredentials: true,
})