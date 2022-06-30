import React from 'react';
import './styles.css';
import PropTypes from 'prop-types';

const CrewInfoComponent = ({
  crewDetailedInfo,
  setSelectedSlide,
  selectedSlide,
  position,
  name,
  info
}) => {
  return (
    <div className="crewMemberInfo">
      <div className="crewMemberInfoWrapper">
        <div className="crewMemberInfoContainer">
          <div className="crewMemberPosition">{position}</div>
          <div className="crewMemberName">{name}</div>
          <div className="crewMemberDetailedInfo">{info}</div>
        </div>
        <div className="slideMenuWrapper">
          {crewDetailedInfo.map((member, index) => (
            <div
              key={index}
              onClick={() => setSelectedSlide(index)}
              className={`${
                index === selectedSlide ? 'slideIndicatorSelected slideIndicator' : 'slideIndicator'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

CrewInfoComponent.propTypes = {
  crewDetailedInfo: PropTypes.array,
  setSelectedSlide: PropTypes.any,
  selectedSlide: PropTypes.number,
  position: PropTypes.string,
  name: PropTypes.string,
  info: PropTypes.string
};

export default CrewInfoComponent;
