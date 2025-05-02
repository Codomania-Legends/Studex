import React, { useState } from 'react'
import './Sidebar.css'
import Logo from '/assets/logo.png'
import Homelogo from '/assets/home.svg'
import Studentinfo from '/assets/search.svg'
import NewStudent from '/assets/newstudent.svg'
import Course from '/assets/course.svg'
import Fee from '/assets/fee.svg'
import Profile from '/assets/profile.svg'
import { useLocation } from "react-router-dom"

function Sidebar() {
  const path = useLocation()
  return (
    <>
      <div className="sidebar-main flex">
            <div className="sidebar-content flex">

              {/* logo */}

              <div className="logo flex">
                  <img src={Logo} className="logo-img" />
              </div>

              {/* home page starts */}
              <div id={`${location.pathname == "/home" ? "active" : "inactive"}`} className={`home flex`} 
              onClick={() => window.location.href = "/home"} 
              >
                <div className="home-icon padding">
                  <img src={Homelogo} alt="" className='home-img' />
                </div>
                <span>Home</span>
              </div>

              {/* student info starts */}
              <div id={`${location.pathname == "/studentinfo" ? "active" : "inactive"}`}
              className="student-info flex" 
              onClick={() => window.location.href = "/studentinfo"}
              >
                <div className="student-icon padding">
                  <img src={Studentinfo} alt="" className="student-img" />
                </div>
                <span>Student Info</span>
              </div>

              {/* new student adding starts */}
              <div id={`${location.pathname == "/newstd" ? "active" : "inactive"}`} 
              className="new-student flex" 
              onClick={() => window.location.href = "/newstd"}
              >
                <div className="new-student-icon padding">
                    <img src={NewStudent} alt="" className="new-student-img" />
                </div>
                <span>New Student</span>
              </div>

              {/* course details starts */}
              <div id={`${location.pathname == "/coursedetail" ? "active" : "inactive"}`} 
              className="course-detail flex" 
              onClick={() => window.location.href = "/coursedetail"}
              >
                <div className="course-icon padding">
                    <img src={Course} alt="" className="course-img" />
                </div>
                <span>Course Details</span>
              </div>

              {/* fees details starts */}
              <div id={`${location.pathname == "/feesdetails" ? "active" : "inactive"}`} 
              className="fee-detail flex" 
              onClick={() => window.location.href = "/feesdetails"}
              >
                <div className="fee-icon padding">
                    <img src={Fee} alt="" className="fee-img" />
                </div>
                <span>Fees Details</span>
              </div>
            </div>

            {/* profile section starts */}
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