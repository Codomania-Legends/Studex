import React, { createContext, useContext } from 'react'
import INPUT1 from './INPUT1.jsx'
import INPUT2 from './INPUT2.jsx'
import INPUT3 from './INPUT3.jsx'
import INPUT4 from './INPUT4.jsx'
import INPUT5 from './INPUT5.jsx'
import "./center.css"

export const NumberContext = createContext()

function CenterSection({ num_to_show, set_numShow, text_heading }) {
  const contextValue = {
    num_to_show,
    set_numShow,
    text_heading
  }

  return (
    <main className='mainCenter flex'> 
    <div className="heading">
      <h1>Add New Student</h1>
    </div>
      <NumberContext.Provider value={contextValue}>
        {num_to_show === 0 && <INPUT1 />}
        {num_to_show === 1 && <INPUT2 />}
        {num_to_show === 2 && <INPUT3 />}
        {num_to_show === 3 && <INPUT4 />}
        {num_to_show === 4 && <INPUT5 />}
      </NumberContext.Provider>
    </main>
  )
}

export default CenterSection
