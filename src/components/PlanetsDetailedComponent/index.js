import PlanetsBarComponent from '../PlanetsBarComponent';
import React from 'react';
import PlanetDetailedMenuComponent from '../../containers/DestinationPage/components/PlanetDetailedMenuComponent';
import PropTypes from 'prop-types';

const PlanetsDetailedComponent = ({
  planetsLabels,
  setSelectedTabNumber,
  selectedTabNumber,
  planetsDetailedInfo
}) => {
  return (
    <div className="planetsDetailedContainer">
      <PlanetsBarComponent
        planetsLabels={planetsLabels}
        setSelectedTabNumber={setSelectedTabNumber}
        selectedTabNumber={selectedTabNumber}
      />
      <PlanetDetailedMenuComponent
        planetsDetailedInfo={planetsDetailedInfo}
        selectedTabNumber={selectedTabNumber}
      />
    </div>
  );
};

PlanetsDetailedComponent.propTypes = {
  planetsLabels: PropTypes.array,
  setSelectedTabNumber: PropTypes.any,
  selectedTabNumber: PropTypes.number,
  planetsDetailedInfo: PropTypes.array
};

export default PlanetsDetailedComponent;
