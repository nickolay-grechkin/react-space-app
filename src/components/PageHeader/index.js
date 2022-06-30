import React from 'react';
import './styles.css';
import PropTypes from 'prop-types';

const PageHeader = ({ pageNumber, pageTitle }) => {
  return (
    <div className="pageTitle">
      <span className="pageNumber">{pageNumber}</span> {pageTitle}
    </div>
  );
};

PageHeader.propTypes = {
  pageNumber: PropTypes.string,
  pageTitle: PropTypes.string
};

export default PageHeader;
