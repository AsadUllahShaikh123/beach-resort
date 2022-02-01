import React from 'react';
import Hero from '../Hero';

import image from '../../images/bg2.jpg'

const Rooms = () => {
  const homeData = {
    image,
    heading:'Available Rooms',
    description:'Best In Class Room',
    btn:'Go Back To Home',
    bg:'bg-violet-700/60',
    destination:'/'
  }
  return (
    <>
      <Hero homeData={homeData}/>
    </>
  )
};
export default Rooms;
