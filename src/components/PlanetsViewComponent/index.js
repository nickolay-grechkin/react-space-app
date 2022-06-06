import React from "react";

const PlanetsViewComponent = ({ props }) => {
    return (
        <img
            src={props.image}
            style={props.selectedTabNumber === props.tabNumber
                ? {opacity: 'unset'}
                : {opacity: 0}}
        />
    );
}

export default PlanetsViewComponent;