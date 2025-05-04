import React, { useContext, useState } from 'react'
import { NumberContext } from './CenterSection'

function INPUT2() {
  const { num_to_show, set_numShow, texxxxt_heading, setAllDetails } = useContext(NumberContext)
  const[ fatherName, setfatherName ] = useState("")
  const[ f_occupation, setf_occupation ] = useState("")
  const[ mothersName, setmothersName ] = useState("")
  const[ m_occupation, setm_occupation ] = useState("")
  return (
    <div className='wrapper flex'>
      <div className='circleDivNumber flex'>{num_to_show+1}</div>
        <div className='gridDivInputs'>
          <div className='FathersName box-occupation flex'>
            <label htmlFor='fathersName'>Father's Name</label>
            <input className="inputFieldOcuupation" placeholder='Enter Fathers Name'
            value={fatherName}
            onChange={(e) => setfatherName(e.target.value)}/>
          </div>
          <div className='FathersName box-occupation flex'>
            <label htmlFor='fathersName'>Occupation</label>
            <input className="inputFieldOcuupation" placeholder='Enter Occupation'
            value={f_occupation}
            onChange={(e) => setf_occupation(e.target.value)}/>
          </div>
          <div className='FathersName box-occupation flex'>
            <label htmlFor='fathersName'>Mother's Name</label>
            <input className="inputFieldOcuupation" placeholder='Enter Mothers Name'
            value={mothersName}
            onChange={(e) => setmothersName(e.target.value)}/>
          </div>
          <div className='FathersName box-occupation flex'>
            <label htmlFor='fathersName'>Occupation</label>
            <input className="inputFieldOcuupation" placeholder='Enter Occupation'
            value={m_occupation}
            onChange={(e) => setm_occupation(e.target.value)}/>
          </div>
        </div>
      <div className='buttonOfSubmit flex'>
        <button className='submitMoveToNext' onClick={() => {
           if( fatherName != "" && mothersName != "" && f_occupation != "" && m_occupation != "" ){
            setAllDetails( (prev) => [ ...prev, {
              fatherName : fatherName,
              mothersName : mothersName,
              f_occupation : f_occupation,
              m_occupation : m_occupation
            } ] )
           }
           set_numShow(2)

        }}>Next</button>
      </div>
    </div>
  )
}

export default INPUT2