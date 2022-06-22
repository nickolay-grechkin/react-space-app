import React from "react";
import './styles.css';

const PlanetDetailedMenuComponent = ({props}) => {
    return (
            <div className='detailedWrapper'>
                <div
                    className='planetViewed'
                >
                    <div className="planetName">
                        {props.planetsDetailedInfo[props.selectedTabNumber].name}
                    </div>
                    <div className="planetDescription">
                        {props.planetsDetailedInfo[props.selectedTabNumber].description}
                    </div>
                    <div className="planetDistanceData">
                        <div className="distanceInfo">
                            <div className="label">Avg. distance</div>
                            <div className="number">{props.planetsDetailedInfo[props.selectedTabNumber].planetDistanceData}</div>
                        </div>
                        <div className="travelInfo">
                            <div className="label">Est. travel time</div>
                            <div className="number">{props.planetsDetailedInfo[props.selectedTabNumber].travelInfo}</div>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default PlanetDetailedMenuComponent;