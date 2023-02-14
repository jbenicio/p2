import axios from 'axios'

const api = axios.create({
  baseURL:'https://localhost:7208/'
});

export default api;