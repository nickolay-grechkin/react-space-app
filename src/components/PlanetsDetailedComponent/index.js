import PlanetsBarComponent from "../PlanetsBarComponent";
import React from "react";
import PlanetDetailedMenuComponent from "../../containers/DestinationPage/components/PlanetDetailedMenuComponent";

const PlanetsDetailedComponent = ({props}) => {

    return (
        <div className="planetsDetailedContainer">
            <PlanetsBarComponent
                props={{
                    planetsLabels: props.planetsLabels,
                    setSelectedTabNumber: props.setSelectedTabNumber
                }}
            />
            <PlanetDetailedMenuComponent
                props={{
                    planetsDetailedInfo: props.planetsDetailedInfo,
                    selectedTabNumber: props.selectedTabNumber
                }}
            />
        </div>
    );
}

export default PlanetsDetailedComponent;