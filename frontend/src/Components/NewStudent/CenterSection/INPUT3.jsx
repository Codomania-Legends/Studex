import React, { useContext } from 'react'
import { NumberContext } from './CenterSection'

function INPUT3() {
  const { num_to_show, set_numShow, text_heading } = useContext(NumberContext)
  return (
    <div className='wrapper flex'>
      <div className='circleDivNumber flex'>{num_to_show+1}</div>
      <div className='gridDivInputs'>
          <div className='coursename box-occupation flex'>
            <label htmlFor='coursename'>Course Name</label>
            <input className="inputFieldOcuupation" placeholder='Enter Course'/>
          </div>
          <div className='Program box-occupation flex'>
            <label htmlFor='Program'>Program</label>
            <input className="inputFieldOcuupation" placeholder='Enter Program' />
          </div>
          <div className='Year box-occupation flex'>
            <label htmlFor='Year'>Year</label>
            <input className="inputFieldOcuupation" placeholder='Enter Year'/>
          </div>
          <div className='Enrollment box-occupation flex'>
            <label htmlFor='Enrollment'>Enrollment Number</label>
            <input className="inputFieldOcuupation" placeholder='Enter Enrollment Number'/>
          </div>
        </div>
      <div className='buttonOfSubmit flex'>
        <button className='submitMoveToNext' onClick={() => set_numShow(3)}>Next</button>
      </div>
    </div>
  )
}

export default INPUT3