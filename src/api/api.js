import axios from 'axios'

export const apiDb = axios.create({
    baseURL:  " https://www.dragonball-api.com/api"
})