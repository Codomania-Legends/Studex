import React, { useContext , useState } from 'react'
import { NumberContext } from './CenterSection'

function INPUT3() {
  const { num_to_show, set_numShow, text_heading , setAllDetails } = useContext(NumberContext)
  const [ course_name , setCourseName ] = useState("")
  const [ program , setProgram ] = useState("")
  const [ year , setYear ] = useState("")
  const [ enrollmentNumber , setNum ] = useState("")
  return (
    <div className='wrapper flex'>
      <div className='circleDivNumber flex'>{num_to_show+1}</div>
      <div className='gridDivInputs'>
          <div className='coursename box-occupation flex'>
            <label htmlFor='coursename'>Course Name</label>
            <input
              value={course_name}
              onChange={ (e) => setCourseName(e.target.value) }
             className="inputFieldOcuupation" placeholder='Enter Course'/>
          </div>
          <div className='Program box-occupation flex'>
            <label htmlFor='Program'>Program</label>
            <input
              value={program}
              onChange={ (e) => setProgram(e.target.value) }
             className="inputFieldOcuupation" placeholder='Enter Program' />
          </div>
          <div className='Year box-occupation flex'>
            <label htmlFor='Year'>Year</label>
            <input
              value={year}
              onChange={ (e) => setYear(e.target.value) }
             className="inputFieldOcuupation" placeholder='Enter Year'/>
          </div>
          <div className='Enrollment box-occupation flex'>
            <label htmlFor='Enrollment'>Enrollment Number</label>
            <input
              value={enrollmentNumber}
              onChange={ (e) => setNum(e.target.value) }
             className="inputFieldOcuupation" placeholder='Enter Enrollment Number'/>
          </div>
        </div>
      <div className='buttonOfSubmit flex'>
        <button className='submitMoveToNext' onClick={() => {
          if( course_name != "" && year != "" && program != "" && enrollmentNumber != "" ){
            setAllDetails( (prev) => ({...prev ,
              course_name : course_name,
              year : year,
              program : program,
              enrollmentNumber : enrollmentNumber
             }) )
            set_numShow(3)
          }
        }}>Next</button>
      </div>
    </div>
  )
}

export default INPUT3
