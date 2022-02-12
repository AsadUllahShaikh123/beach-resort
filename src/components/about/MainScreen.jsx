import { Container } from '@mui/material';
import React from 'react';
import AboutCompany from './AboutCompany';

import Carousel from './Carousel';
import Footer from './Footer';
import MainContent from './MainContent';
import Team from './Team';
const MainScreen = () => {



  return (
    <>
      <div className='min-h-screen'>
        <div className='mt-24 h-screen  w-full'>
          <MainContent />
          <Container>
            <AboutCompany />
            <Carousel />
            <Team />
            <Footer />
          </Container>
        </div>
      </div>
    </>
  );
};

export default MainScreen;


// import client2 from '../../images/about/client2.png'
// import client3 from '../../images/about/client3.png'

  // const customerData = [
  //   {
  //     image: client1,
  //     heading: 'Customer ABC',
  //     description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ipsum quibusdam commodi quae voluptatum esse!'
  //   },
  //   {
  //     image: client2,
  //     heading:'Customer XYZ',
  //     description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ipsum quibusdam commodi quae voluptatum esse!'
  //   },
  //   {
  //     image:client3,
  //     heading:'Customer 123',
  //     description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ipsum quibusdam commodi quae voluptatum esse!'
  //   }
  // ]
