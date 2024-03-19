import axios from 'axios';

const instanse = axios.create({
  baseURL: import.meta.env.VITE_DB_URL,
  timeout: 3000,
})

export default instanse;