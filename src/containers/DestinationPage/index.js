import React, {useEffect, useState} from "react";
import Moon from '../../assets/destination/image-moon.png';
import Europa from '../../assets/destination/image-europa.png';
import Mars from '../../assets/destination/image-mars.png';
import Titan from '../../assets/destination/image-titan.png';
import './styles.css';
import PlanetsViewComponent from "../../components/PlanetsViewComponent";
import PlanetsBarComponent from "../../components/PlanetsBarComponent";
import PlanetsDetailedComponent from "../../components/PlanetsDetailedComponent";

const planetsData = [
    { image: Moon },
    { image: Mars },
    { image: Europa },
    { image: Titan }
];

const planetsLabels = [
    { label: 'Moon' },
    { label: 'Mars' },
    { label: 'Europa' },
    { label: 'Titan' }
];

const planetsDetailedInfo = [
    {
        name: 'Moon',
        description: 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help\n' +
                    'regain perspective and come back refreshed. While you’re there, take in some history\n' +
                    'by visiting the Luna 2 and Apollo 11 landing sites.',
        planetDistanceData: '384,400 km',
        travelInfo: '3 days'
    },
    {
        name: 'Mars',
        description: 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons\n' +
            'the tallest planetary mountain in our solar system. It’s two and a half times\n' +
            'the size of Everest!.',
        planetDistanceData: '225 mil. km',
        travelInfo: '9 months'
    },
    {
        name: 'Europa',
        description: 'The smallest of the four Galilean moons orbiting Jupiter, Europa is a \n' +
            '  winter lover’s dream. With an icy surface, it’s perfect for a bit of \n' +
            '  ice skating, curling, hockey, or simple relaxation in your snug \n' +
            '  wintery cabin.',
        planetDistanceData: '628 mil. km',
        travelInfo: '3 years'
    },
    {
        name: 'Titan',
        description: 'The only moon known to have a dense atmosphere other than Earth, Titan \n' +
            '  is a home away from home (just a few hundred degrees colder!). As a \n' +
            '  bonus, you get striking views of the Rings of Saturn.',
        planetDistanceData: '1.6 bil. km',
        travelInfo: '7 years'
    }
]
const DestinationPage = () => {
    const [selectedTabNumber, setSelectedTabNumber] = useState(0);
    const [selectedPlanetInfo, setSelectedPlanetInfo] = useState({});

    // useEffect(() => {
    //     if (planetsDetailedInfo) {
    //         const [name, description, planetDistanceData, travelInfo] = planetsDetailedInfo[selectedTabNumber];
    //         setSelectedPlanetInfo({
    //             name,
    //             description,
    //             planetDistanceData,
    //             travelInfo
    //         });
    //     }
    // }, [planetsDetailedInfo, setSelectedPlanetInfo]);


    return (
      <div className="destinationWrapper">
          <div className="destinationContainer">
            <div className="planetContainer">
                <div className="planetTitle">
                    <span className="planetNumber">01</span> Pick your destination
                </div>
                {planetsData.map((data, index) => (
                    <PlanetsViewComponent props={{
                        image: data.image,
                        selectedTabNumber: selectedTabNumber,
                        tabNumber: index
                    }}
                    />
                ))}
            </div>
            <PlanetsDetailedComponent props={{
                planetsLabels,
                setSelectedTabNumber,
                name: planetsDetailedInfo[selectedTabNumber].name,
                description: planetsDetailedInfo[selectedTabNumber].description,
                planetDistanceData: planetsDetailedInfo[selectedTabNumber].planetDistanceData,
                travelInfo: planetsDetailedInfo[selectedTabNumber].travelInfo
            }}/>
          </div>
      </div>
    );
}

export default DestinationPage;