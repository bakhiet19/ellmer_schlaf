import axios from "axios";

const baseURL = ''

const instance = axios.create({
  baseURL,
  headers: {"Content-Type": "application/json"},
});

export default function Api(endpoint , data){
    return instance.post(endpoint ,data)
}