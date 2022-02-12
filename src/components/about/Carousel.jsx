import React from 'react'
import { Typography } from '@mui/material'
import client1 from '../../images/about/client1.png'

const Carousel = () => {
  return (
    <>
        <div className='w-full  flex justify-center'>
              <div className='w-5/6 ' style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
                <div className='w-full grid grid-cols-12 p-4'>
                  <div className='col-span-7'>
                    <img src={client1} alt="" srcset="" style={{ width: '100%', height: '100%' }} />
                  </div>
                  <div className='col-span-5 '>
                    <div className='h-full flex flex-col justify-center'>
                      <Typography variant='h3' style={{ textAlign: 'center', width: '100%', marginBottom: '1rem' }}>
                        Customer ABC
                      </Typography>
                      <Typography variant='h6' className='text-gray-500' style={{ textAlign: 'center', width: '100%' }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ipsum quibusdam commodi quae voluptatum esse!
                      </Typography>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    </>
  )
}

export default Carousel