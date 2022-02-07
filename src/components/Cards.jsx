import React from 'react';
import { Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Cards = ({ data }) => {

  let navigate = useNavigate();

  return (
    <>

      <Container >
        <div className='grid grid-cols-3 gap-6 '>
          {
            data.map((values) =>

              <div className='w-full bg-gray-200 rounded-t-lg relative group'
                style={{
                  boxShadow: "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px"
                }}
              >
                <div className='absolute'>
                  <button className="hidden group-hover:block text-gray-600 border-4" onClick={()=>navigate(`/rooms/${values.category.replace(' ','-').toLowerCase()}`,{state:values})}>Featured</button>
                </div>
                <img className='rounded-t-lg' src={values.img} alt="" srcset="" style={{ width: '100%', height: "35vh" }} />
                <Typography style={{ fontSize: '1.5rem', fontWeight: 'bold', textAlign: 'center', letterSpacing: '1px' }} className='text-gray-500'>
                  {values.category}
                </Typography>
              </div>
            )
          }



        </div>
      </Container>

    </>
  )

};

export default Cards;
