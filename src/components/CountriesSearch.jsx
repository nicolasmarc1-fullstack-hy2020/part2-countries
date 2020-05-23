import React, { useState } from 'react'
import Filter from './Filter'
import Countries from './Countries'
import CountryProfile from './CountryProfile'

const CountriesSearch = ({ countries }) => {
  const [countryShown, setCountryShown] = useState(null)
  const [countrySearchResults, setCountrySearchResults] = useState(countries)

  const handleCountrySearch = (search) => {
    const searchResults = countries.filter(country => country.name.toLowerCase().includes(search.toLowerCase()))
    if (searchResults.length === 1) {
      // if 1 country found and but stil typing the same country, no need to change the state, refetch data...
      if (!countryShown || countryShown.capital !== searchResults[0].capital) {
        setCountryShown(searchResults[0])
      }
    } else {
      setCountryShown(null)
      setCountrySearchResults(searchResults)
    }
  }

  const handleCountryClick = (selectedCountry) => {
    setCountryShown(selectedCountry)
  }

  return (
    <div >
      <Filter handleSearch={handleCountrySearch} />
      {countryShown
        ? <CountryProfile country={countryShown} />
        : <Countries countriesToDisplay={countrySearchResults} handleClick={handleCountryClick} />}
    </div>
  );
}

export default CountriesSearch;
