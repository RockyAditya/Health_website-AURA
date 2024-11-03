import React from 'react'
// import Navbar from '../layout/Navbar';
import Info from "../pages/horigincontent/Info";
import Hero from '../pages/horigincontent/Hero';
import About from '../pages/horigincontent/About';
import BookAppointment from '../pages/horigincontent/BookAppointment';
import Reviews from '../pages/horigincontent/Reviews';
import Doctors from '../pages/horigincontent/Doctors';
import Footer from '../pages/horigincontent/Footer';
export default function Horiginpage() {
  return (
    <div className='home-section'>
      <Hero/>
      <Info/>
      <About/>
      <BookAppointment/>
      <Reviews/>
      <Doctors/>
      <Footer/>
      
    </div>
  );
}
