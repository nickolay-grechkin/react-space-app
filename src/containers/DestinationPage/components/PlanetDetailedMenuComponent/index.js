import React from 'react';
import './styles.css';
import PropTypes from 'prop-types';

const PlanetDetailedMenuComponent = ({ planetsDetailedInfo, selectedTabNumber }) => {
  return (
    <div className="detailedWrapper">
      <div className="planetViewed">
        <div className="planetName">{planetsDetailedInfo[selectedTabNumber].name}</div>
        <div className="planetDescription">
          {planetsDetailedInfo[selectedTabNumber].description}
        </div>
        <div className="planetDistanceData">
          <div className="distanceInfo">
            <div className="label">Avg. distance</div>
            <div className="number">
              {planetsDetailedInfo[selectedTabNumber].planetDistanceData}
            </div>
          </div>
          <div className="travelInfo">
            <div className="label">Est. travel time</div>
            <div className="number">{planetsDetailedInfo[selectedTabNumber].travelInfo}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

PlanetDetailedMenuComponent.propTypes = {
  planetsDetailedInfo: PropTypes.array,
  selectedTabNumber: PropTypes.number
};
export default PlanetDetailedMenuComponent;
