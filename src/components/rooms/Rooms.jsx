import React from 'react';
import Hero from '../Hero';

import image from '../../images/bg2.jpg'
import Cards from '../Cards';

import room1 from '../../images/rooms/single_basic.jpg'
import room2 from '../../images/rooms/single_deluxe.jpg'
import room3 from '../../images/rooms/single_economy.jpg'
import room4 from '../../images/rooms/double_basic.jpg'
import room5 from '../../images/rooms/double_deluxe.jpg'
import room6 from '../../images/rooms/double_economy.jpg'
import room7 from '../../images/rooms/family_basic.jpg'
import room8 from '../../images/rooms/family_deluxe.jpg'
import room9 from '../../images/rooms/family_economy.jpg'
import Search from './Search';

const Rooms = () => {
  const homeData = {
    image,
    heading:'Available Rooms',
    description:'Best In Class Room',
    btn:'Go Back To Home',
    bg:'bg-violet-700/60',
    destination:'/'
  }
  let data = [
    {
      img: room1,
      category: 'Single Basic'
    },
    {
      img: room2,
      category: 'Single Deluxe'
    },
    {
      img: room3,
      category: 'Single Economy'
    },
    {
      img: room4,
      category: 'Double Basic'
    },
    {
      img: room5,
      category: 'Double Deluxe'
    },
    {
      img: room6,
      category: 'Double Economy'
    },
    {
      img: room7,
      category: 'Family Basic'
    },
    {
      img: room8,
      category: 'Family Deluxe'
    },
    {
      img: room9,
      category: 'Family Economy'
    }
  ]
  return (
    <>
      <Hero homeData={homeData}/>
      <Search/>
      <div style={{marginBottom:'5rem'}}>
      <Cards data={data} />
      </div>
      <div className='w-full bg-gray-900 h-20'></div>
    </>
  )
};
export default Rooms;
