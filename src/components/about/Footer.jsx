import React from 'react'
import { Typography } from '@mui/material'
const Footer = () => {
  let icons = ['fab fa-facebook-square', 'fab fa-linkedin', 'fab fa-github-square', 'fab fa-youtube'];
  return (
   <>
      <div className='flex justify-between mt-16' >
              <div>
                <Typography style={{ fontSize: '1.5rem' }} className='text-gray-500'>
                  Copyright &copy; Asadullah
                </Typography>
              </div>
              <div className='flex'>
                {
                  icons.map(icon => <i className={`hover:cursor-pointer ${icon}`}style={{ fontSize: '2rem', marginRight: '1rem' }}></i>)
                }
              </div>
            </div>
   </>
  )
}

export default Footer