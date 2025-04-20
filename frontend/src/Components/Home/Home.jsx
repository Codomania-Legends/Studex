import React, { useState } from 'react'
import './Home.css'
import LeftSection from './LeftSection/leftSection'
function Home() {
  const [num_to_show , set_numShow] = useState(1)
  return (
    <>
      <div className="home-main flex ">
        <section style={{zIndex : 2}} className="leftSection flex">
          <LeftSection num_to_show={num_to_show} set_numShow={set_numShow} />
        </section>
        <section className="centerSection flex"></section>
        <section className="rightSection flex"></section>
      </div>
    </>
  )
}

export default Home
