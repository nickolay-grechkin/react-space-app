import React from 'react';
import styles from './styles.module.css';
import PropTypes from 'prop-types';
import { ReactComponent as CloseICon } from '../../assets/shared/icon-close.svg';

const TransitionMenuComponent = ({ isTransitionMenuShown, handleOnMenuIconClick }) => {
  return (
    <div
      className={`${styles.transitionMenuWrapper} 
            ${isTransitionMenuShown ? styles.transitionMenuShown : ''}
            `}
    >
      <div onClick={handleOnMenuIconClick}>
        <CloseICon />
      </div>
    </div>
  );
};

TransitionMenuComponent.propTypes = {
  isTransitionMenuShown: PropTypes.bool,
  handleOnMenuIconClick: PropTypes.any
};
export default TransitionMenuComponent;
