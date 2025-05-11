import React, { useContext , useState } from 'react'
import { NumberContext } from './CenterSection'

function INPUT1() {
  const { num_to_show, set_numShow, setAllDetails } = useContext(NumberContext)
  const [ name , setName ] = useState("")
  const [ gender , setGender ] = useState("")
  const [ mobileNumber , setMob ] = useState("")
  return (
    <div className='wrapper flex'>
      <div className='circleDivNumber flex'>{num_to_show+1}</div>
      <div className="inputsDivs1 flex">
        <div className="nameDivinput flex">
          <label for="name">Your name</label>
          <input placeholder='Enter your name' name="name" className = "name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="genderDivinput flex">
          <label for="gender">Gender</label>
          <select name="gender" className = "gender" value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value={""} >-- Gender --</option>
            <option value={"Male"} >Male</option>
            <option value={"Female"} >Female</option>
            <option value={"Rather"} >Rather not to say</option>
          </select>
        </div>
        <div className="mobileNumDivinput flex">
          <label for="mobileNumber">Mobile Number</label>
          <input placeholder='Enter your Mobile Number' 
          name="mobileNumber" 
          className = "mobileNumber" 
          value={mobileNumber}
          onChange={(e) => setMob(e.target.value)}/>
        </div>
      </div>
      <div className='buttonOfSubmit flex'>
        <button className='submitMoveToNext' onClick={() => {
          if( name != "" && gender != "" && mobileNumber != "" ){
            setAllDetails( (prev) => ({ ...prev,
              name : name , 
              gender : gender , 
              mobileNumber : mobileNumber
            }) )
            set_numShow(1)
          }
          else{
            alert("Please fill in all fields before proceeding.")
          }
        }}>Next</button>
      </div>
    </div>
  )
}

export default INPUT1
