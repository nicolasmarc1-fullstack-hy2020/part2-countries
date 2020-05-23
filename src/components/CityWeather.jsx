import React, { useEffect, useState } from 'react'
import weatherService from '../services/weatherService'

const CityWeather = ({ city }) => {
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    const fetchWeather = async () => {
      const cityWeather = await weatherService.getCity(city)
      setWeather(cityWeather.current)
    }
    fetchWeather()
  }, [city])

  if (!weather) {
    return <div>loading</div>
  }
  const { temperature, weather_icons: [weather_icons], wind_speed, wind_dir, weather_descriptions: [weather_descriptions] } = weather
  return (
    <div>
      <h2>Weather in {city}</h2>
      <p>temperature: {temperature} Celius</p>
      <img className="country-weather" src={weather_icons} alt={`${weather_descriptions} weather`} />
      <p>wind: {wind_speed} mph direction {wind_dir} </p>
    </div>
  )
}


export default CityWeather