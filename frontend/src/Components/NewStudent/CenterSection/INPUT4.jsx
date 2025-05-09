import React, { useContext, useState } from 'react'
import { NumberContext } from './CenterSection'

function INPUT4() {
  const { num_to_show, set_numShow, text_heading, setAllDetails } = useContext(NumberContext)
  const [ address, setaddress ] = useState("")
  const [ city, setcity ] = useState("")
  const [ pincode, setpincode ] = useState("")
  return (
    <div className='wrapper flex'>
      <div className='circleDivNumber flex'>{num_to_show+1}</div>
      <div className="AddressInput3">
        <div className="addressDiv flex">
            <label htmlFor="">Address</label>
            <input className="addressAddressInput" placeholder='Enter your fulll address' 
            value={address}
            onChange={(e) => setaddress(e.target.value)}/>
        </div>
        <div className="cityAndPincode">
          <div className="cityBoxDiv flex">
            <label htmlFor="">City</label>
            <input className="addressInputCityPin" placeholder='Enter City'
            value={city}
            onChange={(e) => setcity(e.target.value)}/>
          </div>
          <div className="pinBoxDiv flex">
            <label htmlFor="">Pincode</label>
            <input className="addressInputCityPin" placeholder='Enter Pincode'
            value={pincode}
            onChange={(e) => setpincode(e.target.value)}/>
          </div>
        </div>
      </div>
      <div className='buttonOfSubmit flex'>
        <button className='submitMoveToNext' onClick={() => {
          if( address != "" && city != "" && pincode != "" ){
            setAllDetails( (prev) => ( {...prev,
              address : address,
              city : city,
              pincode : pincode
            })  )
            console.log(address)
            console.log(city)
            console.log(pincode)
            set_numShow(4)

          }
        }}>Next</button>
      </div>
    </div>
  )
}

export default INPUT4
