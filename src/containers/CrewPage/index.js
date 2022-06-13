import React from "react";
import './styles.css';
import Douglas from '../../assets/crew/image-douglas-hurley.webp';

const crewDetailedInfo = [
    {
        position: 'Commander',
        name: 'Douglas Hurley',
        info: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot \n' +
            '  and former NASA astronaut. He launched into space for the third time as \n' +
            '  commander of Crew Dragon Demo-2.'
    },
    {
        position: 'Mission Specialist',
        name: 'Mark Shuttleworth',
        info: 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind \n' +
            '  the Linux-based Ubuntu operating system. Shuttleworth became the first South \n' +
            '  African to travel to space as a space tourist.'
    },
    {
        position: 'Pilot',
        name: 'Victor Glover',
        info: 'Pilot on the first operational flight of the SpaceX Crew Dragon to the \n' +
            '  International Space Station. Glover is a commander in the U.S. Navy where \n' +
            '  he pilots an F/A-18.He was a crew member of Expedition 64, and served as a \n' +
            '  station systems flight engineer.'
    },
    {
        position: 'Flight Engineer',
        name: 'Anousheh Ansari',
        info: 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. \n' +
            '  Ansari was the fourth self-funded space tourist, the first self-funded woman to \n' +
            '  fly to the ISS, and the first Iranian in space. '
    },
];

const CrewPage = () => {
    return (
        <div className="crewWrapper">
            <div className="crewPageTitle">
                <div className="crewPageNumber">02</div>
                <div>Meet your crew</div>
            </div>
            <div className="crewMemberInfo">
                <div className="crewMemberInfoContainer">
                    <div className="crewMemberPosition">{crewDetailedInfo[0].position}</div>
                    <div className="crewMemberName">{crewDetailedInfo[0].name}</div>
                    <div className="crewMemberDetailedInfo">{crewDetailedInfo[0].info}</div>
                </div>
                <div className="imageContainer">
                    <img className="crewImage" src={Douglas} />
                </div>
            </div>
        </div>
    );
}

export default CrewPage;