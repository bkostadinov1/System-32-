import React from 'react';
import { Element } from 'react-scroll';
import Home from './sections/Home';
import NavBar from './sections/NavBar'

function App() {
  return (
    <div className="">
      <NavBar/>
      <Element name="home" className='h-screen'>
        <Home/>
      </Element>
    </div>
  );
}

export default App;
