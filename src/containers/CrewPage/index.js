import React, { useState } from 'react';
import './styles.css';
import Douglas from '../../assets/crew/image-douglas-hurley.webp';
import Mark from '../../assets/crew/image-mark-shuttleworth.png';
import Victor from '../../assets/crew/image-victor-glover.png';
import Anousheh from '../../assets/crew/image-anousheh-ansari.png';

import CrewInfoComponent from './components/CrewInfoComponent';
import PageHeader from '../../components/PageHeader';

const crewDetailedInfo = [
  {
    position: 'Commander',
    name: 'Douglas Hurley',
    info:
      'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot \n' +
      '  and former NASA astronaut. He launched into space for the third time as \n' +
      '  commander of Crew Dragon Demo-2.',
    image: Douglas
  },
  {
    position: 'Mission Specialist',
    name: 'Mark Shuttleworth',
    info:
      'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind \n' +
      '  the Linux-based Ubuntu operating system. Shuttleworth became the first South \n' +
      '  African to travel to space as a space tourist.',
    image: Mark
  },
  {
    position: 'Pilot',
    name: 'Victor Glover',
    info:
      'Pilot on the first operational flight of the SpaceX Crew Dragon to the \n' +
      '  International Space Station. Glover is a commander in the U.S. Navy where \n' +
      '  he pilots an F/A-18.He was a crew member of Expedition 64, and served as a \n' +
      '  station systems flight engineer.',
    image: Victor
  },
  {
    position: 'Flight Engineer',
    name: 'Anousheh Ansari',
    info:
      'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. \n' +
      '  Ansari was the fourth self-funded space tourist, the first self-funded woman to \n' +
      '  fly to the ISS, and the first Iranian in space. ',
    image: Anousheh
  }
];

const CrewPage = () => {
  const [selectedSlide, setSelectedSlide] = useState(0);

  return (
    <div>
      <PageHeader pageNumber={'02'} pageTitle={'Meet your crew'} />
      <div className="crewWrapper">
        <div className="crewContainer">
          <CrewInfoComponent
            position={crewDetailedInfo[selectedSlide].position}
            name={crewDetailedInfo[selectedSlide].name}
            info={crewDetailedInfo[selectedSlide].info}
            image={crewDetailedInfo[selectedSlide].image}
            selectedSlide={selectedSlide}
            setSelectedSlide={setSelectedSlide}
            crewDetailedInfo={crewDetailedInfo}
          />
        </div>
        <div className="imageContainer">
          <img className="crewImage" src={crewDetailedInfo[selectedSlide].image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default CrewPage;
