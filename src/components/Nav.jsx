import React from 'react';
import './nav.css';
import flounder from './../assets/images/flounder.jpg'
import {Link} from 'react-router-dom';


function Nav(){
  return(
    <div className='nav-wrapper'>
      <div className='top-bar'>
        <div className='nav-logo'>

        </div>
        <ul className='top-bar-links'>
          <Link to='/'><li>Home</li></Link>
          <Link to='/team'><li>Team</li></Link>
          <Link to='/aboutus'><li>About Us</li></Link>
        </ul>
        <div className='nav-social'>
          <img src={flounder} width='200px'/>

        </div>
      </div>
      <div className='nav-line'>

      </div>
    </div>

  );
}

export default Nav;
