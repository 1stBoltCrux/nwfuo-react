import React from 'react';
import alienguy from './../assets/images/alienguy.jpg';
import './aboutus.css';


function AboutUs(){
  return(
    <div className='about-us-wrapper'>
      <h1 className='about-title'>THE HISTORY AND MISSION OF <span className='text-change'>N.W.I.S.D.O.P.M.P.H.D.F.U.</span></h1>
      <div className='alien'>
        <img className='alienpic'src={alienguy}></img>
        <p>(TEAMWORK)</p>
      </div>
      <div>
        <p>Founded by an Alien God, Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
      <div className='lower-container'>
        <div className='lower-container-image'>

        </div>
        <div className='lower-container-text'>

        </div>
      </div>
    </div>

  );
}


export default AboutUs;
