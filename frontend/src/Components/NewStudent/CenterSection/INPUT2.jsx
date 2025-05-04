import React, { useContext } from 'react'
import { NumberContext } from './CenterSection'

function INPUT2() {
  const { num_to_show, set_numShow , setAllDetails } = useContext(NumberContext)
    const [ input1 , setInput1 ] = useState("")
    const [ input2 , setInput2 ] = useState("")
    const [ input3 , setInput3 ] = useState("")
    const [ input4 , setInput4 ] = useState("")
  return (
    <div className='wrapper flex'>
      <div className='circleDivNumber flex'>{num_to_show+1}</div>
        <div className='gridDivInputs'>
          <div className='FathersName box-occupation flex'>
            <label htmlFor='fathersName'>Father's Name</label>
            <input 
              value={input1}
              onChange={(e) => setInput1(e.target.value)}
              name='fatherName' 
              className="inputFieldOcuupation" placeholder='Enter Fathers Name'/>
          </div>
          <div className='FathersName box-occupation flex'>
            <label htmlFor='fathersName'>Occupation</label>
            <input 
              value={input2}
              onChange={(e) => setInput2(e.target.value)}
              name='f_occupation' 
              className="inputFieldOcuupation" placeholder='Enter Occupation'/>
          </div>
          <div className='FathersName box-occupation flex'>
            <label htmlFor='fathersName'>Mother's Name</label>
            <input 
              value={input3}
              onChange={(e) => setInput3(e.target.value)}
              name='mothersName' 
              className="inputFieldOcuupation" placeholder='Enter Mothers Name'/>
          </div>
          <div className='FathersName box-occupation flex'>
            <label htmlFor='fathersName'>Occupation</label>
            <input 
              value={input4}
              onChange={(e) => setInput4(e.target.value)}
              name='m_occupation' 
              className="inputFieldOcuupation" placeholder='Enter Occupation'/>
          </div>
        </div>
      <div className='buttonOfSubmit flex'>
      <button className='submitMoveToNext' onClick={() => {
          setAllDetails( (prev) => [...prev , input1 , input2 , input3 , input4] )
          set_numShow(2)
        }}>Next</button>
      </div>
    </div>
  )
}

export default INPUT2
