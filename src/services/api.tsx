import axios, { AxiosInstance } from "axios"

export const API:AxiosInstance = axios.create({
    baseURL: "https://kenziehub.herokuapp.com/",
    timeout: 5000
})