import React from 'react';
import room1 from '../../images/room1.jpg'
import room2 from '../../images/room2.jpg'
import room3 from '../../images/room3.jpg'
import Cards from '../Cards';
import Heading from '../Heading';
const Featured = () => {

  let data = [
    {
      img: room1,
      category: 'Double Deluxe'
    },
    {
      img: room2,
      category: 'Family Deluxe'
    },
    {
      img: room3,
      category: 'Presidental'
    }
  ]
  const heading = 'Featured Rooms';
  return (
    <>
      <div style={{ height: '90vh' }}>
        <Heading heading={heading} />
        <Cards data={data}/>        
      </div>
    </>
  )
    ;
};

export default Featured;
