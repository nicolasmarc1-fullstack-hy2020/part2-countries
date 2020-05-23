import React from 'react'
import CityWeather from './CityWeather'

const CountryProfile = ({ country }) => {
  const languages = country.languages.map((language) =>
    <li key={language.name}>{language.name}</li>)
  return (
    <div>
      <h1>{country.name}</h1>
      <p>capital: {country.capital} <br /> population: {country.population.toLocaleString()}</p>
      <h2>Spoken languages</h2>
      <ul>
        {languages}
      </ul>
      <img src={country.flag} height='100' alt={"flag of " + country.name} />
      <CityWeather city={country.capital} />
    </div>
  )
}

export default CountryProfile