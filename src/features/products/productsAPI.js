import axios from 'axios'

const getAsyncUsers = async () => {
  const response = await axios('https://fakestoreapi.com/products')
  return response.data
}
export default getAsyncUsers