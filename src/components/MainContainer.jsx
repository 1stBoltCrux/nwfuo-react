import React from 'react';
import EventCard from './EventCard';
import './maincontainer.css';

const eventArray = [
  {
    image:'https://chairnerd.global.ssl.fastly.net/images/performers-landscape/portland-timbers-cf610c/6756/huge.jpg',
    name: 'Quakes at Tims',
    location: 'Providence Park',
    date: 'Jul 7',
    price: '$30'

  },
  {
    image:'https://chairnerd.global.ssl.fastly.net/images/performers-landscape/portland-timbers-cf610c/6756/huge.jpg',
    name: 'Quakes at Tims',
    location: 'Providence Park',
    date: 'Jul 7',
    price: '$30'

  },
  {
    image:'https://chairnerd.global.ssl.fastly.net/images/performers-landscape/portland-timbers-cf610c/6756/huge.jpg',
    name: 'Quakes at Tims',
    location: 'Providence Park',
    date: 'Jul 7',
    price: '$30'

  },
  {
    image:'https://chairnerd.global.ssl.fastly.net/images/performers-landscape/portland-timbers-cf610c/6756/huge.jpg',
    name: 'Quakes at Tims',
    location: 'Providence Park',
    date: 'Jul 7',
    price: '$30'

  },
  {
    image:'https://chairnerd.global.ssl.fastly.net/images/performers-landscape/portland-timbers-cf610c/6756/huge.jpg',
    name: 'Quakes at Tims',
    location: 'Providence Park',
    date: 'Jul 7',
    price: '$30'

  },
  {
    image:'https://chairnerd.global.ssl.fastly.net/images/performers-landscape/portland-timbers-cf610c/6756/huge.jpg',
    name: 'Quakes at Tims',
    location: 'Providence Park',
    date: 'Jul 7',
    price: '$30'

  },
  {
    image:'https://chairnerd.global.ssl.fastly.net/images/performers-landscape/portland-timbers-cf610c/6756/huge.jpg',
    name: 'Quakes at Tims',
    location: 'Providence Park',
    date: 'Jul 7',
    price: '$30'

  }

];

function MainContainer(){
  return (
    <div className='main-container-wrapper'>
      <div className='main-container-content'>
        {eventArray.map((event, index) =>
          <EventCard image={event.image}
            name={event.name}
            location={event.location}
            date={event.date}
            price={event.price}
            key={index}/>
        )}

      </div>
    </div>
  );
}

export default MainContainer;
