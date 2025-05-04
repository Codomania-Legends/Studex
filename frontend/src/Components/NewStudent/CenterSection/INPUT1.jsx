import React, { useContext, useState } from 'react'
import { NumberContext } from './CenterSection'

function INPUT1() {
  const { num_to_show, set_numShow , setAllDetails } = useContext(NumberContext)
  const [ input1 , setInput1 ] = useState("")
  const [ input2 , setInput2 ] = useState("")
  const [ input3 , setInput3 ] = useState("")
  return (
    <div className='wrapper flex'>
      <div className='circleDivNumber flex'>{num_to_show+1}</div>
      <div className="inputsDivs1 flex">
        <div className="nameDivinput flex">
          <label for="nameInput">Your name</label>
          <input
           value={input1} 
           onChange={(e) => setInput1(e.target.value)} 
           placeholder='Enter your name' name="name" className = "nameInput" />
        </div>
        <div className="genderDivinput flex">
          <label for="genderInput">Gender</label>
          <select 
            value={input2} 
            onChange={(e) => setInput2(e.target.value)}  name="gender" className = "genderInput">
            <option>-- Gender --</option>
            <option>Male</option>
            <option>Female</option>
            <option>Rather not to say</option>
          </select>
        </div>
        <div className="mobileNumDivinput flex">
          <label for="mobileNumInput">Mobile Number</label>
          <input
           value={input3} 
           onChange={(e) => setInput3(e.target.value)} 
           placeholder='Enter your Mobile Number' name="mobileNumber" className = "mobileNumInput" />
        </div>
      </div>
      <div className='buttonOfSubmit flex'>
        <button className='submitMoveToNext' onClick={() => {
          setAllDetails( (prev) => [...prev , input1 , input2 , input3] )
          set_numShow(1)
        }}>Next</button>
      </div>
    </div>
  )
}

export default INPUT1
