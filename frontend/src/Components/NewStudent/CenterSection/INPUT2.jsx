import React, { useContext } from 'react'
import { NumberContext } from './CenterSection'

function INPUT2() {
  const { num_to_show, set_numShow, text_heading } = useContext(NumberContext)
  return (
    <div className='wrapper flex'>
      <div className='circleDivNumber flex'>{num_to_show+1}</div>
        <div className='gridDivInputs'>
          <div className='FathersName box-occupation flex'>
            <label htmlFor='fathersName'>Father's Name</label>
            <input className="inputFieldOcuupation" placeholder='Enter Fathers Name'/>
          </div>
          <div className='FathersName box-occupation flex'>
            <label htmlFor='fathersName'>Occupation</label>
            <input className="inputFieldOcuupation" placeholder='Enter Occupation'/>
          </div>
          <div className='FathersName box-occupation flex'>
            <label htmlFor='fathersName'>Mother's Name</label>
            <input className="inputFieldOcuupation" placeholder='Enter Mothers Name'/>
          </div>
          <div className='FathersName box-occupation flex'>
            <label htmlFor='fathersName'>Occupation</label>
            <input className="inputFieldOcuupation" placeholder='Enter Occupation'/>
          </div>
        </div>
      <div className='buttonOfSubmit flex'>
        <button className='submitMoveToNext' onClick={() => set_numShow(2)}>Next</button>
      </div>
    </div>
  )
}

export default INPUT2