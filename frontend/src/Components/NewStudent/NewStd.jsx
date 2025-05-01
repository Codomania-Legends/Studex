import React from 'react'
import './NewStd.css'
import LeftSection from '../NewStudent/LeftSection/leftSection'
import CenterSection from './CenterSection/CenterSection'
import { useState , useEffect } from 'react'
function NewStd() {
  const [num_to_show , set_numShow] = useState(0)
  const text_heading = [
    "General Info", 
    "Parents Details", 
    "Course Details", 
    "Address", 
    "Bus Facility"
  ];
  const [headingNum , setHeadingNum] = useState(text_heading[num_to_show]);

  useEffect( () => setHeadingNum(text_heading[num_to_show]) , [num_to_show])

  return (
    <main className="newstd-main flex">
      
        <section style={{zIndex : 2}} className="leftSection flex">
          <LeftSection num_to_show={num_to_show} set_numShow={set_numShow} text_heading={ headingNum } />
        </section>
        <section className="centerSection flex">
          <CenterSection num_to_show={num_to_show} set_numShow={set_numShow} text_heading={ headingNum } />
        </section>
        <section className="rightSection flex"></section>
    </main>
  )
}

export default NewStd