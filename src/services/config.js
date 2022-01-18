import axios from "axios";

export const http = axios.create({
    baseURL: 'http://localhost/projeto1/public/api/'

});

