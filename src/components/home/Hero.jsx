import { Button } from '@mui/material';
import React from 'react';

const Hero = () => {
  return (
    <div className='overflow-hidden  flex justify-center items-center' style={{ height: '100vh' }}>
      <div className='w-11/12 md:w-1/2 mt-60 md:mt-0 bg-black/60 flex justify-center h-1/2 md:h-1/2  items-center  ' >
        <div className='h-full flex flex-col items-center justify-around md:h-5/6' >
          <div>
            <h1 className='text-6xl text-blue-400 font-bold '>Luxury Rooms</h1>
            <p className='w-3/4 bg-blue-400 h-2 rounded-lg mx-auto mt-4'></p>
          </div>
          <h1 className='text-3xl text-blue-400 font-bold'>Deluxe Rooms Starts at $300</h1>
          <div className='w-full'>
            <Button variant='contained' fullWidth style={{ fontWeight: 'bold', fontSize: '1rem' }}>OUR ROOMS</Button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;
