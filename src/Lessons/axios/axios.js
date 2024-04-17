import axios from 'axios';

const instanse = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 3000,
})

export default instanse;