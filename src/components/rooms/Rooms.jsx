import React from 'react';
import Hero from '../Hero';
import Cards from '../Cards';
import {data} from './roomData'
import { homeData } from './roomData';
import Search from './Search';
import Header from '../Header';

const Rooms = () => {
  
  
  return (
    <>
      <Header/>
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
