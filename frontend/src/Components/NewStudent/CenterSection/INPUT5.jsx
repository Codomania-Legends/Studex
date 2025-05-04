import React, { useContext , useState } from 'react'
import { NumberContext } from './CenterSection'
import star from '/assets/star.png'
// import axios from "axios"

function INPUT5({allDetails}) {
  const { num_to_show, set_numShow, text_heading , setAllDetails } = useContext(NumberContext)
  const [ busFacility , setBus ] = useState("")
  const [ busStop , setStop ] = useState("")
  return (
    <div className='wrapper flex'>
      <div className='circleDivNumber flex'>{num_to_show+1}</div>
      <div className="inputsDivs1 flex">
        <div className="nameDivinput flex">
          <label for="nameInput">
            <img src={star} alt="" className='star'/>
            Bus Facility</label>
          <input 
            value={busFacility}
            onChange={(e) => setBus(e.target.value)}
            
            name="nameInput" className = "nameInput" placeholder='Yess/No'/>
        </div>

        <div className="mobileNumDivinput flex">
          <label for="mobileNumInput">
            <img src={star} alt="" className='star'/>
            Bus Stop</label>
          <input 
            value={busStop}
            onChange={(e) => setStop(e.target.value)}
            
          
            name="mobileNumInput" className = "mobileNumInput" placeholder='Enter Bus Stop'/>
        </div>
      </div>
      <div className='buttonOfSubmit flex'>
        <button className='submitMoveToNext' onClick={async () => {
          setAllDetails((prev) => ({...prev,
            busFacility : busFacility,
            busStop : busStop
          }))
          const res = await axios.post("http://localhost:5000/user" , {
            "name": allDetails.name,
            "enrollmentNumber": allDetails.enrollmentNumber ,
            "gender": allDetails.gender ,
            "mobileNumber": allDetails.mobileNumber ,
            "fatherName": allDetails.fatherName ,
            "f_occupation": allDetails.f_occupation ,
            "mothersName": allDetails.mothersName ,
            "m_occupation": allDetails.m_occupation ,
            "f_mobileNumber": allDetails.f_mobileNumber ,
            "course_id": allDetails.course_id ,
            "course_name": allDetails.course_name ,
            "program": allDetails.program ,
            "year": allDetails.year ,
            "semester": allDetails.semester ,
            "address": allDetails.address ,
            "city": allDetails.city ,
            "pincode": allDetails.pincode ,
            "busFacility": allDetails.busFacility ,
            "busStop": allDetails.busStop
          })
          alert(res?.data?.msg || res?.data.err)
        }}>Submit</button>
      </div>
    </div>
  )
}

export default INPUT5
