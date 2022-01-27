import React from 'react';
import image from '../../images/bg2.jpg'
import Hero from './Hero';
import Services from './Services';
const Home = () => {
  return (
    <>
    <div style={{backgroundImage:`url(${image})`,width:'100%',minHeight:'100vh',backgroundSize:'100% 100%',backgroundPosition:'center',backgroundRepeat:'no-repeat'}}>
      <Hero/>
    </div>
    <Services/>
   </>
  )
};

export default Home;
