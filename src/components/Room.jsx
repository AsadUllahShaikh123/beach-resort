import React from 'react';
import Header from './Header';
import Hero from '../components/Hero'
import { Container } from '@mui/material';
import indoor1 from '../images/rooms/indoor1.jpg';
import indoor2 from '../images/rooms/indoor2.jpg';
import indoor3 from '../images/rooms/indoor3.jpg';

const Room = (props) => {

  let images = [
    {
      img: indoor1,
    },
    {
      img: indoor2
    },
    {
      img: indoor3
    }
  ]


  let { state } = props;
  console.log(state);
  let { img, category } = state;
  let homeData = {
    image: img,
    heading: category,
    description: 'Room',
    btn: 'Go Back To Rooms  ',
    bg: 'bg-black/60',
    destination: '/rooms'
  }


  return (
    <>
      <Header />
      <Hero homeData={homeData} />
      <div style={{ widht: '100vw', height: '100vh' }}>
        <Container style={{ border: '2px solid white' }}>
          <div className='grid grid-cols-3 gap-4 mt-16 '>
            {
              images.map((values) =>
                <div style={{borderRadius:'5px'}}>
                  <img src={values.img} alt="" srcset="" className='border-2 rounded-xl border-gray-100' style={{widhth: '100%', height: "100%",borderRadius:'0.75rem',boxShadow: "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px"
 }} />
                </div>

              )

            }
          </div>

        </Container>
      </div>
    </>
  )
};

export default Room;
