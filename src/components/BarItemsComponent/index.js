import React from 'react';
import PropTypes from 'prop-types';

function BarItemsComponent({ setActiveBarIndex, barIndex, isTabletResolution, number, label }) {
  return (
    <div className="barItem" onClick={() => setActiveBarIndex(barIndex)}>
      {!isTabletResolution && <div className="pageNumber">{number}</div>}
      <div className="pageName">{label}</div>
    </div>
  );
}

BarItemsComponent.propTypes = {
  setActiveBarIndex: PropTypes.any,
  barIndex: PropTypes.number,
  isTabletResolution: PropTypes.bool,
  number: PropTypes.string,
  label: PropTypes.string
};

export default BarItemsComponent;
