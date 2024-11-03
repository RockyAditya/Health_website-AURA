import React from 'react';
import h0 from '../Assets/h0.jpg';
import h1 from '../Assets/h1.jpeg';
import y1 from '../Assets/y1.jpg';
import Carousel from 'react-bootstrap/Carousel';

function StartHome() {
  return (
    <div>
      <Carousel fade>
      <Carousel.Item interval={3000}>
      <img style={{height:'91vh'}} className="d-block w-100" src={h0} alt="first slide" />
      {/* <Carousel.Caption style={{ color: 'black', textShadow: '1px 1px 2px rgba(255, 255, 255, 1.0)' }}>
  <h3>Live Well, Feel Well</h3>
  <p>Health is not just about the weight you lose; it’s about the life you gain.</p>
</Carousel.Caption> */}

<Carousel.Caption style={{
  color: 'black',
  // textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)',
  backgroundColor: 'rgba(255, 255, 255, 0.8)',
  padding: '10px',
  borderRadius: '5px'
}}>
  <h3>Live Well, Feel Well</h3>
  <p>Health is not just about the weight you lose; it’s about the life you gain.</p>
</Carousel.Caption>


      </Carousel.Item>
      <Carousel.Item interval={2000}>
      <img style={{height:'91vh'}} className="d-block w-100" src={h1} alt="second slide" />
        <Carousel.Caption style={{
  color: 'black',
  // textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)',
  backgroundColor: 'rgba(255, 255, 255, 0.8)',
  padding: '10px',
  borderRadius: '5px'}}>
          <h3>Fresh, Wholesome, and Pure</h3>
          <p>A healthy diet is a solution to many of our health-care problems. It’s the most important solution.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
      <img style={{height:'91vh'}} className="d-block w-100" src={y1} alt="third slide" />
        <Carousel.Caption style={{
  color: 'black',
  // textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)',
  backgroundColor: 'rgba(255, 255, 255, 0.8)',
  padding: '10px',
  borderRadius: '5px'}}>
          <h3>Achieve, Balance, Thrive</h3>
          <p>
          A balanced body leads to a balanced mind.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default StartHome;
