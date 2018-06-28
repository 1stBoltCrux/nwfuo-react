import React from 'react';
import PropTypes from 'prop-types';
import './profilecard.css';

function ProfileCard(props) {
  return(
    <div className='profile-card-wrapper'>
      <div className='profile-title'><h1>{props.title}</h1></div>
      <div className='profile-content'>


        <div className='profile-body-top'><img src={props.image}></img><div className='profile-personal'><h3>{props.name}</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p></div></div>
        <div className='keanu'><p>Best Keanu Reeves Movie: {props.keanu}</p></div>
        <div className='spirit'><p>Spirit Animal: {props.spirit}</p></div>
        </div>
    </div>
  );
}

ProfileCard.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  name: PropTypes.string,
  keanu: PropTypes.string,
  spirit: PropTypes.string
}


export default ProfileCard;
