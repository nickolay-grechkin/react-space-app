import React from "react";
import './styles.module.css';

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