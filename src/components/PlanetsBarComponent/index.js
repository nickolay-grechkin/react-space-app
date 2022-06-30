import React from 'react';
import './styles.css';
import PropTypes from 'prop-types';

const PlanetsBarComponent = ({ planetsLabels, selectedTabNumber, setSelectedTabNumber }) => {
  return (
    <div className="planetsBarContainer">
      {planetsLabels.map((planet, index) => (
        <div
          key={index}
          className={`${index === selectedTabNumber ? 'selectedItemIndicator' : 'defaultBarItem'}`}
          onClick={() => setSelectedTabNumber(index)}
        >
          {planet.label}
        </div>
      ))}
    </div>
  );
};

PlanetsBarComponent.propTypes = {
  planetsLabels: PropTypes.array,
  selectedTabNumber: PropTypes.number,
  setSelectedTabNumber: PropTypes.any
};

export default PlanetsBarComponent;
