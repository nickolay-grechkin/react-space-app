import React from "react";
import './styles.css';

const PlanetsBarComponent = ({props}) => {
    return (
        <div className="planetsBarContainer">
            {props.planetsLabels.map((planet, index) => (
                <div className={`${index === props.selectedTabNumber ? 'selectedItemIndicator' : 'defaultBarItem'}`}
                     onClick={() => props.setSelectedTabNumber(index)}>{planet.label}
                </div>
            ))}
        </div>
    );
}

export default PlanetsBarComponent;