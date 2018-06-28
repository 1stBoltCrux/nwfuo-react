import React from 'react';
import ProfileCard from './ProfileCard'
import whiteguy from './../assets/images/whiteguy.jpg'
import './team.css'
function Team(){

  const personArray = [
    {
      name: 'Todd',
      image: whiteguy,
      spirit: 'Pangolin',
      keanu: 'Speed 2',
      title: 'Chief Observator'
    },
    {
      name: 'Todd',
      image: whiteguy,
      spirit: 'Pangolin',
      keanu: 'Speed 2',
      title: 'Chief Observator'
    },
    {
      name: 'Todd',
      image: whiteguy,
      spirit: 'Pangolin',
      keanu: 'Speed 2',
      title: 'Chief Observator'
    },
    {
      name: 'Todd',
      image: whiteguy,
      spirit: 'Pangolin',
      keanu: 'Speed 2',
      title: 'Chief Observator'
    },
    {
      name: 'Todd',
      image: whiteguy,
      spirit: 'Pangolin',
      keanu: 'Speed 2',
      title: 'Chief Observator'
    },
    {
      name: 'Todd',
      image: whiteguy,
      spirit: 'Pangolin',
      keanu: 'Speed 2',
      title: 'Chief Observator'
    },
    {
      name: 'Todd',
      image: whiteguy,
      spirit: 'Pangolin',
      keanu: 'Speed 2',
      title: 'Chief Observator'
    },
    {
      name: 'Todd',
      image: whiteguy,
      spirit: 'Pangolin',
      keanu: 'Speed 2',
      title: 'Chief Observator'
    },
    {
      name: 'Todd',
      image: whiteguy,
      spirit: 'Pangolin',
      keanu: 'Speed 2',
      title: 'Chief Observator'
    }
  ]
  return(
    <div className='team-wrapper'>
        {personArray.map((person, index)=>
              <ProfileCard
                title={person.title}
                image={person.image}
                name={person.name}
                keanu={person.keanu}
                spirit={person.spirit}
                key={index}/>
        )}

    </div>

  );
}

export default Team;
