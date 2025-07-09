import axios from "axios";

const axiosIntance = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL
});

axiosIntance.interceptors.request.use(function (config) {
    if (localStorage.getItem('access_token')) {
        config.headers.Authorization = `Bearer ${localStorage.getItem('access_token')}`;
    }

    return config;
}, function (error) {
    return Promise.reject(error);
});

export default axiosIntance;