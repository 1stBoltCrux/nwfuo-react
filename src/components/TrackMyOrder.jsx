import React from 'react';
import canyun from '../assets/images/grandcanyon.jpg';

function TrackMyOrder(){
  return(
    <div className='track-my-order-wrapper'>
      <p>We are not currently tracking orders.</p>
       <img src={canyun}/>
    </div>
  );
}

export default TrackMyOrder;
