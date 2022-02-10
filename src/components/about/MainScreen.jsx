import { Button, Container, Typography } from '@mui/material';
import React from 'react';
import about from '../../images/about/about.png'
import client1 from '../../images/about/client1.png'
import profile1 from '../../images/profile/profile1.jpg'
import profile2 from '../../images/profile/profile2.jpg'
import profile3 from '../../images/profile/profile3.jpg'
const MainScreen = () => {
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
      <div className='min-h-screen'>
        <div className='mt-24 h-screen  w-full'>
          <div className='grid grid-cols-12  m-0 h-full'>
            <div className='col-span-6'>
              <img src={about} alt="" style={{ width: '100%', height: '80%' }} />
            </div>
            <div className='col-span-6  '>
              <div className='text-center mt-20'>
                <Typography variant='h2' style={{ marginBottom: '2rem' }} >
                  About Us
                </Typography>
                <Typography variant='h6' className='text-gray-500' style={{ marginBottom: '2rem' }} >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, itaque ducimus error et ratione ut aut omnis ea id libero minus eligendi deleniti nam amet possimus quibusdam architecto asperiores debitis!
                </Typography>
                <div className='flex justify-center'>
                  <Button variant='outlined' style={{
                    width: '50%', border: '2px solid gray', color: 'gray', fontSize: '1rem', textTransform: 'none', fontWeight: 'bold'
                  }} >
                    Contact us
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <Container>
            <Typography variant='h2' style={{ marginBottom: '2rem' }}>
              About Company
            </Typography>
            <Typography variant='p' className='text-gray-500' style={{ fontSize: '1.2rem' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo corporis distinctio iste consequuntur iusto porro, amet sint esse modi quo itaque harum ex ullam vel incidunt ab? Excepturi, cupiditate omnis! Dolores, tempore. Est id molestias debitis amet tenetur aliquid necessitatibus, nam facere placeat autem dolores numquam suscipit itaque minima voluptas hic blanditiis, temporibus voluptatibus. Vero ab similique architecto ipsum earum itaque! Incidunt temporibus quos voluptatibus possimus quae, dicta neque sapiente repellendus! Consequuntur eveniet ducimus esse, sed fugiat maiores enim. Distinctio ipsum iusto quisquam itaque iste libero fugit est? Recusandae, totam accusamus pariatur magnam amet cumque aspernatur nobis illo autem? Officia amet error ipsam corporis ex, delectus reiciendis dolor nobis harum? At nesciunt in atque ut iure voluptatum, rerum beatae odit earum voluptatibus laudantium architecto autem ducimus obcaecati officiis, rem laboriosam similique dolore magnam aut accusantium amet labore! Enim culpa cum neque eligendi. Nobis laudantium doloremque cum recusandae sit repellat temporibus vitae sint officiis deleniti cumque facilis, sed nulla accusantium laborum et numquam assumenda voluptate quae! Quasi iusto quos culpa, impedit, asperiores, perferendis eum placeat quis veniam nam inventore obcaecati? Nisi magni nulla enim officia voluptatem voluptates ab. Reprehenderit pariatur ratione maiores molestias, sequi quis aperiam, excepturi saepe officiis consequuntur eum.</Typography>
            <Typography variant='h2' style={{ marginTop: '3rem', marginBottom: '3rem' }}>
              What Our Client says
            </Typography>
            <div className='w-full  flex justify-center'>
              <div className='w-5/6 grid grid-cols-12 p-4' style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
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
                        <Typography variant='h5' >
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
                              <i class={icon} style={{ fontSize: '2rem' }}></i>
                            )
                          }
                        </div>
                      </div>
                    </div>
                  )
                }

              </div>
            </div>
            

            <div className='flex justify-between mt-16' >
                <div>
                  <Typography style={{fontSize:'1.5rem'}} className='text-gray-500'>
                   Copyright &copy; Asadullah 
                  </Typography>
                </div>
                <div className='flex'>  
                  {
                    icons.map(icon => <i class={icon} style={{ fontSize: '2rem',marginRight:'1rem'}}></i> )
                  }
               </div>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};

export default MainScreen;
