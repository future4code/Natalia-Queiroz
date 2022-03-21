import axios from "axios"
import { baseURL } from "./baseURL"

axios
    .get(`${baseURL}/subscribers/idInvalido/notifications`)
    .then(res => res.data)
    .then(console.log)
    .catch(err => err.response?.data || err.message)
    .then(console.log)