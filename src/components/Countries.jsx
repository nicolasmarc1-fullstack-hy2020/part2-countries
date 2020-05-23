import React from 'react'

const Button = ({ text, handleClick }) =>
  <button onClick={handleClick}>{text}</button>


const Country = ({ name }) =>
  <span>{name}</span>


const Countries = ({ countriesToDisplay, handleClick }) => {
  if (countriesToDisplay.length === 0)
    return (
      <div>No results</div>
    )
  if (countriesToDisplay.length > 10)
    return (
      <div>Too many matches, specify another filter</div>
    )
  return (
    <div>
      {countriesToDisplay.map(country =>
        <div key={country.name}>
          <Country name={country.name} />
          <Button handleClick={() => handleClick(country)} text="show" />
        </div>)
      }
    </div>
  )
}

export default Countries
