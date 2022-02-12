import React from 'react'
import { Typography } from '@mui/material'
import profile1 from '../../images/profile/profile1.jpg'
import profile2 from '../../images/profile/profile2.jpg'
import profile3 from '../../images/profile/profile3.jpg'

const Team = () => {
  let icons = ['fab fa-facebook-square', 'fab fa-linkedin', 'fab fa-github-square', 'fab fa-youtube'];

  const screenData = [
    {
      image: profile1,
      designation: 'Director',
      post: 'CEO',
      years: '5',
      links: 'Connect',
      icons
    },
    {
      image: profile2,
      designation: 'Team Member',
      post: 'Manager',
      years: '5', 
      links: 'Connect',
      icons
    },
    {
      image: profile3,
      designation: 'Team Member',
      post: 'Manager',
      years: '8',
      links: 'Connect',
      icons
    },

  ]



  return (
    <>
      
      <div className='mt-24'>
              <Typography variant='h2' style={{ marginBottom: "3rem" }}>
                Our Team
              </Typography>
              <div className='grid grid-cols-3 gap-12'>
                {
                  screenData.map(values =>
                    <div className='p-4' style={{ boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}>
                      <div>
                        <div className='w-full mb-6'>
                          <img src={values.image} alt="" srcset="" />
                        </div>
                        <Typography variant='h5' style={{ fontWeight: 'bold' }} >
                          {values.designation}
                        </Typography>
                        <div className='flex justify-between items-center mt-2'>
                          <Typography variant='h6' className='text-gray-500' style={{ fontSize: '1.3rem' }}>
                            {values.post}
                          </Typography>
                          <Typography className='text-gray-500' style={{ fontSize: '1.3rem' }}>
                            {values.years}
                          </Typography>
                        </div>
                        <Typography variant='h5' className='text-gray-500' style={{ marginTop: '2.5rem' }}>
                          {values.links}
                        </Typography>
                        <div className='flex justify-around mt-6'>
                          {
                            values.icons.map((icon) =>
                              <i className={`hover:cursor-pointer ${icon}`} style={{ fontSize: '2rem' }}></i>
                            )
                          }
                        </div>
                      </div>
                    </div>
                  )
                }
              </div>
            </div>
    </>
  )
}

export default Team