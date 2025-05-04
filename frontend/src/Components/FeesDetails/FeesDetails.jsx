import React, { useState } from 'react'
import './FeesDetails.css'
import search from '/assets/search.svg'
function FeesDetails() {
  const[feesInput, setFeesInput] = useState('')
  return (
    <main className="fees-main flex">
      <div className="heading-fees flex">
        <h1>Fees Details</h1>
      </div>
      <div className="search-fees flex">
        <div className="fees-search-content flex">
            <img src={search} className="fees-img" />
  
            <input type="text" 
            placeholder='Search Student Fees' 
            className='search-fee-input'
            />
          </div>
      </div>
      <div className="fees-bill flex"></div>
    </main>
  )
}

export default FeesDetails