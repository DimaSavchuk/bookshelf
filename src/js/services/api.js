import axios from "axios";

export const apiInstance = axios.create({
    baseURL: "https://books-backend.p.goit.global",
})