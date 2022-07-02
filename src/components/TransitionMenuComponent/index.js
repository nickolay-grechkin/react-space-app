import React from 'react';
import styles from './styles.module.css';
import PropTypes from 'prop-types';
import { ReactComponent as CloseICon } from '../../assets/shared/icon-close.svg';
import BarItemsComponent from '../BarItemsComponent';

const TransitionMenuComponent = ({
  isTransitionMenuShown,
  handleOnMenuIconClick,
  menuItems,
  setActiveBarIndex
}) => {
  const handleOnMenuItemClick = itemIndex => {
    setActiveBarIndex(itemIndex);
    handleOnMenuIconClick(false);
  };

  return (
    <div
      className={`${styles.transitionMenuWrapper} 
            ${isTransitionMenuShown ? styles.transitionMenuShown : styles.transitionMenuShownClosed}
            `}
    >
      <div className={styles.closeIcon} onClick={() => handleOnMenuIconClick(false)}>
        <CloseICon />
      </div>
      <div className={styles.transitionMenuItemsContainer}>
        {menuItems.map((item, index) => (
          <BarItemsComponent
            key={index}
            number={item.number}
            label={item.label}
            barIndex={index}
            setActiveBarIndex={handleOnMenuItemClick}
            barItemsStyle={styles.barItemsStyle}
          />
        ))}
      </div>
    </div>
  );
};

TransitionMenuComponent.propTypes = {
  isTransitionMenuShown: PropTypes.bool,
  handleOnMenuIconClick: PropTypes.any,
  menuItems: PropTypes.array,
  setActiveBarIndex: PropTypes.func
};

export default TransitionMenuComponent;
