import React, { useContext } from 'react'
import { NumberContext } from './CenterSection'

function INPUT4() {
  const { num_to_show, set_numShow, text_heading } = useContext(NumberContext)
  return (
    <div className='wrapper flex'>
      <div className='circleDivNumber flex'>{num_to_show+1}</div>
      <div className="AddressInput3">
        <div className="addressDiv flex">
            <label htmlFor="">Address</label>
            <input className="addressAddressInput" placeholder='Enter your fulll address' />
        </div>
        <div className="cityAndPincode">
          <div className="cityBoxDiv flex">
            <label htmlFor="">City</label>
            <input className="addressInputCityPin" placeholder='Enter City'/>
          </div>
          <div className="pinBoxDiv flex">
            <label htmlFor="">Pincode</label>
            <input className="addressInputCityPin" placeholder='Enter Pincode'/>
          </div>
        </div>
      </div>
      <div className='buttonOfSubmit flex'>
        <button className='submitMoveToNext' onClick={() => set_numShow(4)}>Next</button>
      </div>
    </div>
  )
}

export default INPUT4