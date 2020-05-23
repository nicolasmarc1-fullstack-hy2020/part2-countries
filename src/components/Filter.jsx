import React, {useState} from 'react'

const Filter = ({ handleSearch  }) => {
  const [filterInput, setSearchInput] = useState('')
  const handleFilterInput = (e) => {
    setSearchInput(e.target.value)
    handleSearch(e.target.value)
  }


  

  return (
    <div>
      find countries <input type='text' value={filterInput} onChange={handleFilterInput} onFocus={handleFilterInput} />
    </div>
  )
}

export default Filter
