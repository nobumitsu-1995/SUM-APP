import axios from "axios"

const client = axios.create({
    withCredentials: true,
    baseURL: "http://localhost:80",
    // baseURL: "https://sum-up-api.net",
});

export default client;