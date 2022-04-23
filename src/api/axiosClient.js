import axios from "axios";

const axiosClient = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 10000,
});

export default axiosClient;