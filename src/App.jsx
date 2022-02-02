import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/home/Home';
import Rooms from './components/rooms/Rooms';

const App = () => {

  
  return (
    <>
      <Header />
      <Routes >
        <Route path='/' element={<Home/>}/>

        <Route path='/rooms' element={<Rooms/>}/>
         
      </Routes>




    </>
  )
};

export default App;
