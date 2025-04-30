import React, { useContext } from 'react'
import { NumberContext } from './CenterSection'

function INPUT3() {
  const { num_to_show, set_numShow, text_heading } = useContext(NumberContext)
  return (
    <div className='wrapper flex'>
      <div className='circleDivNumber flex'>{num_to_show+1}</div>
        <div className='gridDivInputs'>
          <div className='FathersName box-occupation'>
            <label htmlFor='fathersName'>Father's Name</label>
          </div>
          <div className='FathersName box-occupation'>
            <label htmlFor='fathersName'>Occupation</label>
          </div>
          <div className='FathersName box-occupation'>
            <label htmlFor='fathersName'>Mother's Name</label>
          </div>
          <div className='FathersName box-occupation'>
            <label htmlFor='fathersName'>Occupation</label>
          </div>
        </div>
      <div className='buttonOfSubmit flex'>
        <button className='submitMoveToNext' onClick={() => set_numShow(3)}>Next</button>
      </div>
    </div>
  )
}

export default INPUT3