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
            <div className="box11-content ">
              {
                Data.map( (v,i) => {
                    return(
                      <div key={i} className="content22-details flex"
                      >
                        <div className="first-div">
                          <div className="c_id flex">
                            <span>Btech</span>
                          </div>
                          <div className="c_name flex ">
                            <span>Bachelors of Technology</span>
                          </div>
                          <div className="c_duration flex ">
                            <span>Duration:</span>
                          </div>
                        </div>
                        <div className="second-div flex">
                          <div className="total-registration">
                            <span>Total Registration : </span>
                          </div>
                          
                          <div className="duration-time flex">
                            <span>2yr | 4sem</span>
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