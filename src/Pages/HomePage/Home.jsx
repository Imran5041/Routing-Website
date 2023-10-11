import React from 'react'
import Navbar from "../../Containers/Header/Navbar"
import Common from '../../Components/Common/Common'
import Foot from '../../Containers/Footer/Foot'
function Home() {
  return (
    <div className='Home'>
    <Navbar />
      <Common  name="Welcome to Home Page"
      visit="/about"
      img="/Images/gif gentlemen.gif"
      btname="Get Started" />
      <Foot />
    </div>
  )
}

export default Home
