import { Typography } from '@mui/material';
import React from 'react';

const Header = () => {
  return (
    <>
      <div className='flex flex-col w-screen p-4 items-center  md:flex-row overflow-hidden  fixed z-50'>
        <div className='flex-1'>
          <h1 className='text-4xl inline-flex text-blue-400 hover:cursor-pointer hover:text-orange-300 font-bold'>Luxury Rooms</h1>
        </div>
        <div className='navlinks flex flex-col md:flex-row md:justify-around w-full mt-4 md:mt-0 text-blue-400 md:w-5/12 items-center'>
          <Typography className='hover:cursor-pointer hover:text-orange-300 ' style={{ fontWeight: 'bold', padding: '.3rem', fontSize: '1.5rem' }}>Home</Typography>
          <Typography className='hover:cursor-pointer hover:text-orange-300 ' style={{ fontWeight: 'bold', padding: '.3rem', fontSize: '1.5rem' }}>Rooms</Typography>
          <Typography className='hover:cursor-pointer hover:text-orange-300 ' style={{ fontWeight: 'bold', padding: '.3rem', fontSize: '1.5rem' }}>About</Typography>
          <Typography className='hover:cursor-pointer hover:text-orange-300 ' style={{ fontWeight: 'bold', padding: '.3rem', fontSize: '1.5rem' }}>Contact</Typography>
        </div>
      </div>
    </>
  )
};

export default Header;
