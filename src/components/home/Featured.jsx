import { Container } from '@mui/material';
import React from 'react';
import room1 from '../../images/room1.jpg'
import room2 from '../../images/room2.jpg'
import room3 from '../../images/room3.jpg'
const Featured = () => {

  let data = [
    {
      img: room1,
      category: 'Double Delux'
    },
    {
      img: room2,
      category: 'Family Delux'
    },
    {
      img: room3,
      category: 'Presidental'
    }
  ]
  return (
    <>
      <div style={{ height: '90vh' }}>
        <div style={{ height: '30vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className='w-auto  flex flex-col items-center'>
            <h1 className='text-center text-6xl mb-4 font-medium  text-blue-500'>Featured Rooms</h1>
            <p className='h-1 rounded-md bg-gray-900  block w-4/6'></p>
          </div>
        </div>
        <Container>
          <div className='grid grid-cols-3 gap-x-4'>
            {
              data.map((values) =>
                <div className='w-full bg-gray-100 rounded-t-lg'>
                  <img className='rounded-t-lg' src={values.img} alt="" srcset="" />
                  <p>{values.category}</p>
                </div>
              )
            }


          </div>
        </Container>
      </div>
    </>
  )
    ;
};

export default Featured;
