import React from 'react';
import Button from './Button';
import './nav.css';


import './app.css';

function Nav(){
  return (
    <div className='nav-wrapper'>
      <div className='top-bar'>
        <div className='actions'>
          <div className='seat-geek-logo'>

          </div>

          <Button/>

        </div>
        <div className='sign-up'>
          <p>Track My Order</p><p>Sign Up</p><p>Log In</p>
        </div>

      </div>
      <div className='title-search'>
        <h1>Billions of tickets from one guy.</h1>
          <div className='search-bar'>
            <div className='search-image'>
              <img src='https://upload.wikimedia.org/wikipedia/commons/5/55/Magnifying_glass_icon.svg'/>
            </div>

            <input type='text' placeholder='Search by team, artist, or venue'></input><button type='submit'>Search</button>

          </div>

      </div>
    </div>
  );
}

export default Nav;
