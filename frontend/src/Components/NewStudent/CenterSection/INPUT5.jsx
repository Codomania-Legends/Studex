import React, { useContext } from 'react'
import { NumberContext } from './CenterSection'
import star from '/assets/star.png'

function INPUT5() {
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

          
            name="nameInput" className = "nameInput" placeholder='Yess/No'/>
        </div>

        <div className="mobileNumDivinput flex">
          <label for="mobileNumInput">
            <img src={star} alt="" className='star'/>
            Bus Stop</label>
          <input 
            value={busFacility}

          
            name="mobileNumInput" className = "mobileNumInput" placeholder='Enter Bus Stop'/>
        </div>
      </div>
      <div className='buttonOfSubmit flex'>
        <button className='submitMoveToNext' onClick={() => alert("Information Submitted")}>Submit</button>
      </div>
    </div>
  )
}

export default INPUT5