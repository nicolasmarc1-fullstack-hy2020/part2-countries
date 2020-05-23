import axios from 'axios'

const baseURL = 'https://restcountries.eu/rest/v2/all'


const getAll = async () => {
  const response = await axios.get(baseURL)
  return response.data
}

export default { getAll }