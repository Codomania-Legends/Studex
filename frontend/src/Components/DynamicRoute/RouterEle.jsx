import React from 'react'
import { useParams } from "react-router-dom"
import Home from '../Home/Home.jsx'
import Search from '../StudentInfo/StudentInfo.jsx'
import Sidebar from '../Sidebar/Sidebar.jsx'
import rightside from '/assets/rightside.svg'
import leftside from '/assets/leftside.svg'
import '../../App.css'
import NewStd from '../NewStudent/NewStd.jsx'
import NewFeature from '../NewFeature/NewFeature.jsx'
function RouterEle() {
  const pathname = useParams()
  console.log(pathname)
  return (
    <>
      <main className="route-main flex">
        <div className="sidebar">
          <Sidebar/>
        </div>
        <div className="content flex">
          <div className="baksa">
            <img src={leftside} alt="" className='rightside' />
            <img src={rightside} alt="" className='leftside' />
            {
              ( pathname.route == "home" && <Home/> )
            }
            {
              ( pathname.route == "studentinfo" && <Search/> )
            }
            {
              ( pathname.route == "newstd" && <NewStd/> )
            }
            {
              ( pathname.route == "newfeat" && <NewFeature/> )
            }

          </div>

        </div>

      </main>
    </>
  )
}

export default RouterEle
