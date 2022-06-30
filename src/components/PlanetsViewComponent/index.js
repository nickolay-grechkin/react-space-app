import React from 'react';
import './styles.css';
import PropTypes from 'prop-types';

const PlanetsViewComponent = ({ image, selectedTabNumber, tabNumber }) => {
  return (
    <div className="planetImageContainer">
      <img
        className="planetImage"
        src={image}
        style={selectedTabNumber === tabNumber ? { opacity: 'unset' } : { opacity: 0 }}
        alt=""
      />
    </div>
  );
};

PlanetsViewComponent.propTypes = {
  image: PropTypes.any,
  selectedTabNumber: PropTypes.number,
  tabNumber: PropTypes.number
};

export default PlanetsViewComponent;
