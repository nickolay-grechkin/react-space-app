import React from "react";
import './styles.css';

const PlanetsViewComponent = ({ props }) => {
    return (
        <div className="planetImageContainer">
            <img
                className="planetImage"
                src={props.image}
                style={props.selectedTabNumber === props.tabNumber
                    ? {opacity: 'unset'}
                    : {opacity: 0}}
            />
        </div>
    );
}

export default PlanetsViewComponent;