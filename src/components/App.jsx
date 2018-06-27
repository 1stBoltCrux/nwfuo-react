import React from 'react';
import Nav from './Nav';
import MainContainer from './MainContainer';
import { Switch, Route } from 'react-router-dom';
import TrackMyOrder from './TrackMyOrder';

function App(){
  return (
    <div className='app-wrapper'>
      <Nav/>
      <Switch>
      <Route exact path = '/' component={MainContainer}/>

      <Route exact path = '/trackmyorder' component={TrackMyOrder}/>
      </Switch>
    </div>

  );
}

export default App;
