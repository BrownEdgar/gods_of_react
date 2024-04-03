import axios from 'axios';

const instance = axios.create({
  baseURL: import.meta.env.VITE_DB_URL,
  timeout: 3000,
  timeoutErrorMessage: "Internet connection too low"
})

export default instance;