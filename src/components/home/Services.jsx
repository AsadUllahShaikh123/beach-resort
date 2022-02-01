import React from 'react';

const Services = () => {

  let data = [
    {
      icon: 'fas fa-cocktail',
      heading: 'Free Cocktail',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, sapiente blanditiis! Facilis!',
    },
    {
      icon: 'fas fa-hiking',
      heading: 'Endless Hiking',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, sapiente blanditiis! Facilis!',
    },
    {
      icon: 'fas fa-beer',
      heading: "Unlimited Beer",
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, sapiente blanditiis! Facilis!',
    },
    {
      icon: 'fas fa-shuttle-van',
      heading: "Free Shuttle",
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, sapiente blanditiis! Facilis!',
    }

  ]

  return (
    <>
      <div style={{ height: '90vh' }}>
        <div style={{ height: '30vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className='w-auto  flex flex-col items-center'>
            <h1 className='text-center text-6xl mb-4 font-medium  text-blue-500'>Services</h1>
            <p className='h-1 rounded-md bg-gray-900  block w-4/6'></p>
          </div>
        </div>
        <div className='bg-gray-100 p-4'>
          <div className='grid grid-cols-1 gap-y-8 sm:grid-cols-2 
          sm:gap-8
          md:grid-cols-3 lg:grid-cols-4 md:gap-x-8'>
            {
              data.map((values) =>
                <div className='bg-white rounded-md'>
                  <div className='flex justify-center my-6 '>
                    <div className='w-auto hover:cursor-pointer hover:animate-spin hover:transition hover:duration-1000'>
                    <i class={values.icon} style={{ color: '#0277bd', fontSize: '100px' }}></i>
                    </div>
                  </div>
                  <h1 className='text-center text-gray-500 text-2xl font-mono mb-4'>{values.heading}</h1>
                  <h1 className='text-center text-gray-500 font-mono mb-6'>{values.description}</h1>
                </div>

              )
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
