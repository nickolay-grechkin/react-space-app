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
                <div className="slideMenuWrapper">
                    {props.crewDetailedInfo.map((member, index) => (
                        <div
                            key={index}
                            onClick={() => props.setSelectedSlide(index)}
                            className={`${index === props.selectedSlide 
                                             ? 'slideIndicatorSelected slideIndicator' 
                                             : 'slideIndicator'}`
                             }
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CrewInfoComponent;