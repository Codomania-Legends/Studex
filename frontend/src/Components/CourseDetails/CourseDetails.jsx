import React from 'react'
import './CourseDetails.css'
import {Data} from '../Data/Data.jsx'
function CourseDetails() {
  return (
    <>
        <main className="course-main flex"> 
          <div className="heading-div flex">
            <h1>Course Details</h1>
          </div>
          <div className="center-box-div flex">
            <div className="box-content ">
              {
                Data.map( (v,i) => {
                    return(
                      <div key={i} className="content-details flex"
                      >{v.name} - {v.enrollment_number}</div>
                    )
                } )
              }
            </div>
          </div>
        </main>
    </>

)
}

export default CourseDetails