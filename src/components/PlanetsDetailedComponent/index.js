import PlanetsBarComponent from "../PlanetsBarComponent";
import React from "react";

const PlanetsDetailedComponent = ({props}) => {
    return (
        <div className="planetsDetailedContainer">
            <PlanetsBarComponent
                props={{
                    planetsLabels: props.planetsLabels,
                    setSelectedTabNumber: props.setSelectedTabNumber
                }}
            />
            <div className="planetName">
                {props.name}
            </div>
            <div className="planetDescription">
                {props.description}
            </div>
            <div className="planetDistanceData">
                <div className="distanceInfo">
                    <div className="label">Avg. distance</div>
                    <div className="number">{props.planetDistanceData}</div>
                </div>
                <div className="travelInfo">
                    <div className="label">Est. travel time</div>
                    <div className="number">{props.travelInfo}</div>
                </div>
            </div>
        </div>
    );
}

export default PlanetsDetailedComponent;