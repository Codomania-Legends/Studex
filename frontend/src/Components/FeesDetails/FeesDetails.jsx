import axios from "axios"
import React, { useState, useEffect } from 'react'
import './FeesDetails.css'
import search from '/assets/search.svg'
import rupee from '/assets/rupee.png'
function FeesDetails() {
  const[feesInput, setFeesInput] = useState('')
  const CourseName = [
    "Bache"
  ]

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
    <main className="fees-main flex">
      <div className="heading-fees flex">
        <h1>Fees Details</h1>
      </div>
      <div className="search-fees flex">
        <div className="fees-search-content flex">
          <img src={search} className="fees-img" />

          <input type="text" 
          placeholder='Search Courses' 
          className='search-fee-input'
          value={feesInput}
          onChange={ (e) => setFeesInput(e.target.value) }
          />
        </div>
        {/* drop down starts here */}
        {feesInput != "" && <div className="fee-drop-down">
          { feesInput &&
            Users.filter( (v) => 
              v?.name?.toLowerCase().includes( feesInput.toLowerCase() ) ||
              v?.enrollment_number?.toLowerCase().includes( feesInput.toLowerCase() )
            ).map( (v,i) => {
                return(
                  <div key={i} className="fee-details flex" onClick={ () => {
                    setFeesInput("")
                  } }>{v.name} - {v.enrollment_number}</div>
                )
            } )
          }
        </div>
        }
        
      </div>
      <div className="fees-bill flex">
        <div className="sem-bill-info flex">
          <div className="course-name flex"><span>Bachelors of Technology</span></div>
          <div className="sem-fees-deatils">
            <div className="semester-head flex">Semester</div>
            <div className="fees-head flex">
              <div className="rupee-icon">
                <img src={rupee} alt="" className="rupee-img" />
              </div>
              <span>Fees</span>
            </div>
            <div className="sem1 flex"><span>Semester1</span></div>
            <div className="fee1 flex">
              <div className="rupee-icon">
                <img src={rupee} alt="" className="rupee-img" />
              </div>
              <span>Fees1</span>
            </div>

            <div className="sem2 flex"><span>Semester2</span></div>
            <div className="fee2 flex">
              <div className="rupee-icon">
                <img src={rupee} alt="" className="rupee-img" />
              </div>
              <span>Fees2</span>
            </div>

            <div className="sem3 flex"><span>Semester3</span></div>
            <div className="fee3 flex">
              <div className="rupee-icon">
                <img src={rupee} alt="" className="rupee-img" />
              </div>
              <span>Fees3</span>
            </div>

            <div className="sem4 flex"><span>Semester4</span></div>
            <div className="fee4 flex">
              <div className="rupee-icon">
                <img src={rupee} alt="" className="rupee-img" />
              </div>
              <span>Fees4</span>
            </div>

            <div className="sem5 flex"><span>Semester5</span></div>
            <div className="fee5 flex">
              <div className="rupee-icon">
                <img src={rupee} alt="" className="rupee-img" />
              </div>
              <span>Fees5</span>
            </div>

            <div className="sem6 flex"><span>Semester6</span></div>
            <div className="fee6 flex">
              <div className="rupee-icon">
                <img src={rupee} alt="" className="rupee-img" />
              </div>
              <span>Fees6</span>
            </div>

            <div className="sem7 flex"><span>Semester7</span></div>
            <div className="fee7 flex">
              <div className="rupee-icon">
                <img src={rupee} alt="" className="rupee-img" />
              </div>
              <span>Fees7</span>
            </div>

            <div className="sem8 flex"><span>Semester8</span></div>
            <div className="fee8 flex">
              <div className="rupee-icon">
                <img src={rupee} alt="" className="rupee-img" />
              </div>
              <span>Fees8</span>
            </div>

            <div className="line1 flex"><hr /></div>
            <div className="line2 flex"><hr /></div>

            <div className="bus flex">Bus Fees</div>
            <div className="bus-fees flex">
            <div className="rupee-icon">
                <img src={rupee} alt="" className="rupee-img" />
              </div>
              <span>875</span>
            </div>


            <div className="total flex">Total Fees</div>
            <div className="total-fees flex">
            <div className="rupee-icon">
                <img src={rupee} alt="" className="rupee-img" />
              </div>
              <span>9567</span>
            </div>
            .
          </div>
        </div>
      </div>
    </main>
  )
}

export default FeesDetails




{/* <div className="course-sem-details flex">
              
              <hr></hr>
            </div>
            <div className="course-fees-details flex">
              
              
              <hr/>
            </div> */}