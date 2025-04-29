import React, { useContext } from 'react'
import { NumberContext } from './CenterSection'

function INPUT2() {
  const { num_to_show, set_numShow, text_heading } = useContext(NumberContext)
  return (
    <div className='wrapper flex'>
      <div className='circleDivNumber flex'>{num_to_show+1}</div>
      <div className="inputsDivs1 flex">
        <div className="nameDivinput flex">
          <label for="nameInput">Your name</label>
          <input name="nameInput" className = "nameInput" />
        </div>
        <div className="genderDivinput flex">
          <label for="genderInput">Gender</label>
          <select name="genderInput" className = "genderInput">
            <option>-- Gender --</option>
            <option>Male</option>
            <option>Female</option>
            <option>Rather not to say</option>
          </select>
        </div>
        <div className="mobileNumDivinput flex">
          <label for="mobileNumInput">Mobile Number</label>
          <input name="mobileNumInput" className = "mobileNumInput" />
        </div>
      </div>
      <div className='buttonOfSubmit flex'>
        <button className='submitMoveToNext' onClick={() => set_numShow(1)}>Next</button>
      </div>
    </div>
  )
}

export default INPUT2