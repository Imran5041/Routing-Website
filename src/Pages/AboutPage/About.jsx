import React from 'react'
import Navbar from '../../Containers/Header/Navbar';
import { Common } from '../../Components';
import Foot from '../../Containers/Footer/Foot';

function About() {
  return (
    <div className='About'>
      <Navbar />
      <Common  name="Welcome to About Page"
      visit="/about"
      img="\Images\web-developer.jpg"
      btname="Get Started" />
      <Foot />
    </div>
  )
}

export default About
