import React, { useState } from 'react'
import './CourseDetails.css'
import axios from "axios"

function CourseDetails() {
  const [ Courses , setCourses ] = useState([])
  async function handleCourseAll() {
    await axios.get( "http://localhost:5000/course" )
    .then( (data) => setCourses(data.data) )
  }
  handleCourseAll()
  return (
    <>
        <main className="course-main flex"> 
          <div className="heading-div flex">
            <h1>Course Details</h1>
          </div>
          <div className="center-box-div flex">
            <div className="box11-content ">
              {
                Courses.map( (v,i) => {
                    return(
                      <div key={i} className="content22-details flex"
                      >
                        <div className="first-div">
                          <div className="c_id flex">
                            <span>Btech</span>
                          </div>
                          <div className="c_name flex ">
                            <span>{v.course_name}</span>
                          </div>
                          <div className="c_duration flex ">
                            <span>Duration: {v.duration}</span>
                          </div>
                        </div>
                        <div className="second-div flex">
                          <div className="total-registration">
                            <span>Total Registration : {v.total_registered_students}</span>
                          </div>
                          
                          <div className="duration-time flex">
                            <span>{v.duration} | {parseInt(v.duration.split(" ")[0]) * 2}</span>
                          </div>

                        </div>
                      </div>
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
