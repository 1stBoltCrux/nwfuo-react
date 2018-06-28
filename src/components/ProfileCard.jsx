import React from 'react';
import PropTypes from 'prop-types';
import './profilecard.css';

function ProfileCard(props) {
  return(
    <div className='profile-card-wrapper'>
        <div className='profile-title'><h1>{props.title}</h1></div>
        <div className='profile-body-top'><img src={props.image}></img><h3>{props.name}</h3></div>
        <div className='keanu'><p>{props.keanu}</p></div>
        <div className='spirit'><p>{props.spirit}</p></div>
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
