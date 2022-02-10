import { Button, Typography } from '@mui/material';
import React from 'react';
import Header from '../Header';

const Contact = () => {
  let placeholder = ['First Name', 'Last Name', 'Email Address', 'Phone no.']
  return (
    <>
      <Header />
      <div className='min-h-screen'>
        <div className='mt-24 h-5/6 w-full flex justify-center p'>
          <div className='w-1/2 px-4' style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
            <Typography variant='h2' style={{ textAlign: 'center', marginBottom: '6rem' }} className='text-gray-300 bg-gray-700'>
              Contact us
            </Typography>
            <div className='grid grid-cols-2 gap-y-20 gap-x-8'>
              {
                placeholder.map(value => <input type='text' className='border-2 outline-gray-400' style={{ padding: '0.5rem', borderRadius: '8px' }} placeholder={value} />)
              }
            </div>
            <textarea className='border-2 w-full p-2 mt-16 rounded-lg outline-gray-500' placeholder='Your Message' />
            <div className='flex justify-center mt-4 mb-12'>
              <div className='w-1/2'>
                <Button variant='outlined' fullWidth style={{ border: '2px solid gray', color:'black',textTransform:'none',fontSize:'1.2rem',padding:'0.5rem' }}>Send Message</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default Contact;
