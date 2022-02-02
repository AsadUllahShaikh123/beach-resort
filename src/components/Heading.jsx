import React from 'react';

const Heading = ({heading}) => {
  return (
    <>
      <div style={{ height: '30vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className='w-auto  flex flex-col items-center'>
            <h1 className='text-center text-6xl mb-4 font-medium  text-blue-500'>{heading}</h1>
            <p className='h-1 rounded-md bg-gray-900  block w-1/2'></p>
          </div>
        </div>
    </>
  )
};

export default Heading;