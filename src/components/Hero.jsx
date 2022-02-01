import { Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = ({homeData}) => {
  let navigate = useNavigate();
  const {image,heading,description,btn,bg,destination} = homeData;
  return (
    <div style={{ backgroundImage: `url(${image})`, width: '100%', minHeight: '100vh', backgroundSize: '100% 100%', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      <div className='overflow-hidden  flex justify-center items-center' style={{ height: '100vh' }}>
        <div className={`w-11/12 md:w-1/2 mt-60 md:mt-0 ${bg} flex justify-center h-1/2 md:h-2/5  items-center`} >
          <div className='h-full flex flex-col items-center justify-around md:h-full' >
            <div>
              <h1 className='text-6xl text-blue-400 font-bold '>{heading}</h1>
              <p className='w-3/4 bg-blue-400 h-2 rounded-lg mx-auto mt-4'></p>
            </div>
            <h1 className='text-3xl text-blue-400 font-bold'>{description}</h1>
            <div className='w-full'>
              <Button variant='contained' fullWidth style={{ fontWeight: 'bold', fontSize: '1rem' }} onClick={()=> navigate(`${destination}`)} >{btn}</Button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
