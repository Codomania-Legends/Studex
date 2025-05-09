import React, { useState, useEffect } from 'react'
import './StudentInfo.css'
import search from '/assets/search.svg'
import axios from "axios"
function StudentInfo() {
  const[ inputVal, setInputVal ] = useState(null)
  const[ selected, setSelected ] = useState(null)
  const [ value, setValue ] = useState(null)
  const [ Users , setUsers ] = useState([])
  const [ default_data , setDefault ] = useState([])
  const [selectedUser, setSelectedUser] = useState(null);

  async function handleGetAllUsers() {
    try {
      const { data } = await axios.get("http://localhost:5000/user");
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }

  async function getSpecificUser() {
    try {
      const { data } = await axios.get(`http://localhost:5000/user/${selected}`);
      setSelectedUser(data); // Use a separate state
    } catch (err) {
      console.log(err);
    }
  }

  // Use useEffect to fetch data only once when the component mounts
  useEffect(() => {
    handleGetAllUsers();
  }, []);

  useEffect(() => {
    if (selected) {
      getSpecificUser();
    }
  }, [selected]);

  return (
    <main className="stdinfo-main flex ">
      <div className="studentinfi-head flex">
        <h1>Student Info</h1>
      </div>
      <div className="student-search-input flex">
        <div className="stdinfo-search-content flex">
          <img src={search} className="student-img" />

          <input
            type="text"
            placeholder="Student Info"
            className="search-input"
            value={inputVal || ""}
            onFocus={() => {
              setDefault(Users);
            }}
            
            onChange={(e) => {
              const val = e.target.value;
              setInputVal(val);
            
              if (val.trim() === "") {
                setDefault(Users); // show all
              } else {
                const filtered = Users.filter(
                  (v) =>
                    v?.name?.toLowerCase().includes(val.toLowerCase()) ||
                    v?.enrollmentNumber?.toLowerCase().includes(val.toLowerCase())
                );
                setDefault(filtered); // show filtered
              }
            }}
            
          />
        </div>
        {inputVal !== "" && (
          <div className="drop-down">
            {default_data.map((v, i) => (
              <div
                key={i}
                className="details flex"
                onClick={() => {
                  setSelected(v.enrollmentNumber);
                  setInputVal("");
                  setDefault([]);
                }}
              >
                <div className="filteredData">
                  <span>{v.name}</span> 
                  <span >{v.enrollmentNumber}</span>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* Searched content will be shown here */}
      <div className="searched-content flex">
          {
            selected && selectedUser &&
            <div className=' v flex'>
            
            <h1 className="ansval flex" onClick={ () => setValue(selectedUser?.name) }>{selectedUser?.name} </h1>
            <span>Click above for more info</span>
            </div>
          }
      </div>
      <div className="content-details flex">
          {
            Users.map( (v) => {
              if( v.name === value ){
                console.log("selected:" , v)
                return(
                  <div className='std-content'>
                    <div className="enroll boxx flex"><span>Enrollment : </span>
                    <span className='valuesStudentInfo flex'>{ v.enrollmentNumber }</span></div>
                    <div className="sem boxx flex"><span>Sem | Year</span>
                    <span className='valuesStudentInfo flex'>{ v.semester } | { v.year }</span></div>
                    <div className="course boxx flex"><span>Course : </span>
                    <span className='valuesStudentInfo flex'>{ v.course_name }</span></div>
                    <div className="dept boxx flex"><span>Dept : </span>
                    <span className='valuesStudentInfo flex'>{ v.program }</span></div>
                    <div className="city boxx flex"><span>City : </span>
                    <span className='valuesStudentInfo flex'>{ v.addressInfo?.city }</span></div>
                    <div className="bus-facility boxx flex"><span>Bus Facility : </span>
                    <span className='valuesStudentInfo flex'>{ v.bus_facility || "None" }</span></div>
                    <div className="fees-paid boxx flex"><span>Fees Paid : </span>
                    <span className='valuesStudentInfo flex'>True</span></div>
                    <div className="contact boxx flex"><span>Contact Number : </span>
                    <span className='valuesStudentInfo flex'>{ v.mobileNumber }</span></div>
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
