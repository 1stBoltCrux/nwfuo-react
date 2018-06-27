import React from 'react';
import Nav from './Nav';
import MainContainer from './MainContainer';
import { Switch, Route } from 'react-router-dom';

function App(){
  return (
    <div className='app-wrapper'>

      <Nav/>
      <MainContainer/>

    </div>

  );
}

export default App;
