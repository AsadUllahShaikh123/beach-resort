import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './components/home/Home';
import Room from './components/Room';
import Rooms from './components/rooms/Rooms';

const App = () => {

  let location = useLocation();
  let { state } = location;

  return (
    <>
      <Routes >
        <Route path='/' element={<Home />} />

        <Route path='/rooms' element={<Rooms />} />
        <Route path='/rooms/:category' element={<Room state={state}/>} />

      </Routes>




    </>
  )
};

export default App;
