import React, { useState, useEffect } from 'react'
import './App.css';
import CountriesSearch from './components/CountriesSearch';
import countryService from './services/countryService'


function App() {

  // fetch countries data, cache data in local storage, display loading screen before showing Country Search app
  const [countries, setCountries] = useState(null)

  useEffect(() => {
    const fetchCountries = async () => {
      const countries = await countryService.getAll()
      setCountries(countries)
      window.localStorage.setItem("countries-cache", JSON.stringify(countries))
    }
    const cachedCountries = JSON.parse(window.localStorage.getItem("countries-cache"))
    if (cachedCountries) {
      setCountries(cachedCountries)
    }
    else {
      fetchCountries()
    }
  }, [])

  return (
    < >
      {countries ? <CountriesSearch countries={countries} /> : <div >Loading    </div>}
    </>
  );
}

export default App;
