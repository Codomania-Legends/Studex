import React, { useContext , useState } from 'react'
import { NumberContext } from './CenterSection'
// import { all } from 'axios'

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
            <select
              value={course_name}
              onChange={ (e) => setCourseName(e.target.value) }
             className="inputFieldOcuupation" placeholder='Enter Course'>
                <option value="">-- Course Name --</option>
                <option value={"Bachelor of Computer Science"}>Bachelor of Computer Science</option>
                <option value={"Bachelor of Business Administration"}>Bachelor of Business Administration</option>
                <option value={"Bachelor of Engineering in Mechanical"}>Bachelor of Engineering in Mechanical</option>
                <option value={"Bachelor of Technology in AI & ML"}>Bachelor of Technology in AI & ML</option>
                <option value={"Bachelor of Arts in Psychology"}>Bachelor of Arts in Psychology</option>
             </select>
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
          if (course_name !== "" && year !== "" && program !== "" && enrollmentNumber !== "") {

            const studentDetails = {
              course_name: course_name,
              year: year,
              program: program,
              enrollmentNumber: enrollmentNumber
            };

            setAllDetails((prev) => ({
              ...prev,
              ...studentDetails,
            }));

            set_numShow(3);
          } else {
            console.error("Please fill in all fields before proceeding.");
          }
        }}>Next</button>
      </div>
    </div>
  )
}

export default INPUT3
