import React, { useState, useEffect } from 'react'
import './StudentInfo.css'
import search from '/assets/search.svg'
import axios from "axios"
function StudentInfo() {
  const[ inputVal, setInputVal ] = useState('')
  const[ selected, setSelected ] = useState('')
  const [ value, setValue ] = useState('')
  const [ Users , setUsers ] = useState([])

  async function handleGetAllUsers() {
    try {
      const { data } = await axios.get("http://localhost:5000/user");
      console.log(data);
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }

  // Use useEffect to fetch data only once when the component mounts
  useEffect(() => {
    handleGetAllUsers();
  }, []);

  return (
    <main className="stdinfo-main flex ">
      <div className="studentinfi-head flex">
        <h1>Student Info</h1>
      </div>
      <div className="student-search-input flex">
        <div className="stdinfo-search-content flex">
          <img src={search} className="student-img" />

          <input type="text" 
          placeholder='Student Info' 
          className='search-input'
          value={inputVal}
          onChange={ (e) => setInputVal(e.target.value) }
          />
        </div>

        {/* drop down starts here */}
        {inputVal != "" && <div className="drop-down">
          { inputVal &&
            Users.filter( (v) => 
              v?.name?.toLowerCase().includes( inputVal.toLowerCase() ) ||
              v?.enrollment_number?.toLowerCase().includes( inputVal.toLowerCase() )
            ).map( (v,i) => {
                return(
                  <div key={i} className="details flex" onClick={ () => {
                    setSelected(v.name)
                    setInputVal("")
                  } }>{v.name} - {v.enrollment_number}</div>
                )
            } )
          }
        </div>}
      </div>

      {/* Searched content will be shown here */}
      <div className="searched-content flex">
          {
            selected && 
            <div className=' v flex'>
            
            <h1 className="ansval flex" onClick={ () => setValue(selected) }>{selected} </h1>
            <span>Click above for more info</span>
            </div>
          }
      </div>
      <div className="content-details flex">
          {
            Users.map( (v) => {
              if( v.name == value ){
                return(
                  <div className='std-content'>
                    <div className="enroll boxx flex"><span>Enrollment : </span>{ v.enrollment_number }</div>
                    <div className="sem boxx flex"><span>Sem | Year</span>{ v.semester } | { v.year }</div>
                    <div className="course boxx flex"><span>Course : </span>{ v.course }</div>
                    <div className="dept boxx flex"><span>Dept : </span>{ v.department }</div>
                    <div className="city boxx flex"><span>City : </span>{ v.city }</div>
                    <div className="bus-facility boxx flex"><span>Bus Facility : </span>{ v.bus_facility }</div>
                    <div className="fees-paid boxx flex"><span>Fees Paid : </span>{ v.fees_paid }</div>
                    <div className="contact boxx flex"><span>Contact Number : </span>{ v.contact_number }</div>
                  </div>
                )
              }
            } )
          }
      </div>
    </main>
  )
}

export default StudentInfo


// naam
// pehchan
// ghar
// zaat
// saans
// sb kuch
// ishq
