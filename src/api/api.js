import axios from 'axios'

export const apiDb = axios.create({
    baseURL:  "https://dragonball-api.com/api/"
})