import React from "react";
import './styles.css';

const PlanetDetailedMenuComponent = ({props}) => {
    return (
        <div style={{display: 'flex'}}>
            <div>
                {props.planetsDetailedInfo.map((planet, index) => (
                    <div
                        className={`${props.selectedTabNumber === index ? 'planetViewed' : 'planetHidden'}`}
                    >
                        <div className="planetName">
                            {planet.name}
                        </div>
                        <div className="planetDescription">
                            {planet.description}
                        </div>
                        <div className="planetDistanceData">
                            <div className="distanceInfo">
                                <div className="label">Avg. distance</div>
                                <div className="number">{planet.planetDistanceData}</div>
                            </div>
                            <div className="travelInfo">
                                <div className="label">Est. travel time</div>
                                <div className="number">{planet.travelInfo}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PlanetDetailedMenuComponent;