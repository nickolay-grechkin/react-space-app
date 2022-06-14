import React from "react";
import './styles.css';

const CrewInfoComponent = ({props}) => {
    return (
        <div className="crewMemberInfo">
            <div className="crewMemberInfoWrapper">
                <div className="crewMemberInfoContainer">
                    <div className="crewMemberPosition">{props.position}</div>
                    <div className="crewMemberName">{props.name}</div>
                    <div className="crewMemberDetailedInfo">{props.info}</div>
                </div>
            </div>
            <div className="imageContainer">
                <img className="crewImage" src={props.image} />
            </div>
        </div>
    );
}

export default CrewInfoComponent;