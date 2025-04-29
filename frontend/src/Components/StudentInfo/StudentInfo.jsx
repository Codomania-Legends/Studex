import React, { useState } from 'react'
import './StudentInfo.css'
import search from '/assets/search.svg'
import {Data} from '../Data/Data'
function StudentInfo() {
  const[ inputVal, setInputVal ] = useState('')
  return (
    <main className="stdinfo-main flex ">
      <div className="studentinfi-head flex">
        <h1>Student Info</h1>
      </div>
      <div className="student-search-input flex">
        <div className="stdinfo-search-content flex">
          <img src={search} className="student-img" />

          <input type="text" 
          placeholder='Student Info' 
          className='search-input'
          value={inputVal}
          onChange={ (e) => setInputVal(e.target.value) }
          />
        </div>
        <div className="drop-down">
          { inputVal &&
          
            Data.filter( (v) => 
              v?.name?.toLowerCase().includes( inputVal.toLowerCase() ) ||
              v?.enrollment_number?.toLowerCase().includes( inputVal.toLowerCase() )
            ).map( (v,i) => {
                return(
                  <div key={i} className="details flex">{v.name} - {v.enrollment_number}</div>
                )
            } )
          }
        </div>
      </div>
      <div className="searched-content">

      </div>
    </main>
  )
}

export default StudentInfo
