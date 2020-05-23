import axios from 'axios'

const api_key = process.env.REACT_APP_API_KEY
const baseURL = `http://api.weatherstack.com/current?access_key=${api_key}`

const getCity = async (city) => {
  const query = `${baseURL}&query=${city}`
  console.log(query)
    const response = await axios.get(query)
    return response.data
}

export default { getCity }