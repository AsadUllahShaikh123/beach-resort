import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import About from './components/about/About';
import Contact from './components/contact/Contact';
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
        <Route path ='/about' element = {<About/>} />
        <Route path = '/contact' element = {<Contact/>}/>
      </Routes>




    </>
  )
};

export default App;
