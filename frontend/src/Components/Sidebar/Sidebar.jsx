import React, { useState } from 'react'
import './Sidebar.css'
import Logo from '/assets/logo.png'
import Homelogo from '/assets/home.svg'
import Studentinfo from '/assets/search.svg'
import NewStudent from '/assets/newstudent.svg'
import Course from '/assets/course.svg'
import Fee from '/assets/fee.svg'
import Profile from '/assets/profile.svg'

function Sidebar() {
  return (
    <>
      <div className="sidebar-main flex">
            <div className="sidebar-content flex">
              <div className="logo flex">
                  <img src={Logo} className="logo-img" />
              </div>
              <div className="home flex" onClick={() => window.location.href = "/home"} >
                <div className="home-icon padding">
                  <img src={Homelogo} alt="" className='home-img' />
                </div>
                <span>Home</span>
              </div>
              <div className="student-info flex" onClick={() => window.location.href = "/studentinfo"}>
                <div className="student-icon padding">
                  <img src={Studentinfo} alt="" className="student-img" />
                </div>
                <span>Student Info</span>
              </div>
              <div className="new-student flex">
                <div className="new-student-icon padding">
                    <img src={NewStudent} alt="" className="new-student-img" />
                </div>
                <span>New Student</span>
              </div>
              <div className="course-detail flex">
                <div className="course-icon padding">
                    <img src={Course} alt="" className="course-img" />
                </div>
                <span>Course Details</span>
              </div>
              <div className="fee-detail flex">
                <div className="fee-icon padding">
                    <img src={Fee} alt="" className="fee-img" />
                </div>
                <span>Fees Details</span>
              </div>
            </div>
            <div className="sidebar-profile flex">
              <div className="profile-pic">
                <img src={Profile} alt="" className="profile-img" />
              </div>
              <span>Anshul Vishwakarma</span>
            </div>
        </div>
    </>
  )
}

export default Sidebar