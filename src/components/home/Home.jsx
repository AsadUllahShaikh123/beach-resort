import React from 'react';
import Featured from './Featured';
import Footer from './Footer';
import Hero from '../Hero'
import Services from './Services';
import image from '../../images/bg1.jpg'

const Home = () => {
  const homeData = {
    image,
    heading:'Luxury Rooms',
    description:'Deluxe Rooms Starts at $300',
    btn:'OUR ROOMS',
    bg:'bg-black/60',
    destination:'/rooms'
  }
  return (
    <>
     <Hero homeData = {homeData}/>
    <Services/>
    <Featured/>
    <Footer/>
   </>
  )
};

export default Home;
