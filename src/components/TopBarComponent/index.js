import './styles.css';
import React, { useState } from 'react';
import { ReactComponent as TopBarIcon } from '../../assets/shared/logo.svg';
import BarItemsComponent from '../BarItemsComponent';
import { controlIndicator } from '../../helpers/controll.bar.indicator.helper';
import { ReactComponent as MenuIcon } from '../../assets/shared/icon-hamburger.svg';
import { useEffect } from 'react';
import PropTypes from 'prop-types';

import TransitionMenuComponent from '../TransitionMenuComponent';
import ReactDOM from 'react-dom';

const barItems = [
  { number: '00', label: 'HOME' },
  { number: '01', label: 'DESTINATION' },
  { number: '02', label: 'CREW' },
  { number: '03', label: 'TECHNOLOGY' }
];

const TopBarComponent = ({
  isMobileResolution,
  activeBarIndex,
  isTabletResolution,
  isTransitionMenuShown,
  setActiveBarIndex,
  setIsTransitionMenuShown
}) => {
  const [el, setEl] = useState();
  const handleOnMenuIconClick = () => {
    setIsTransitionMenuShown(!isTransitionMenuShown);
  };

  useEffect(() => {
    if (!isMobileResolution) {
      controlIndicator();
    }
    window.addEventListener('resize', () => {
      controlIndicator();
    });
  }, []);

  useEffect(() => {
    setEl(document.getElementById('transition-menu-container'));
  });

  return (
    <>
      <div className="topNavBarWrapper">
        <div className="topBarIcon">
          <TopBarIcon />
        </div>
        {!isTabletResolution && !isMobileResolution && (
          <div className="dividerWrapper">
            <div className="dividerLine" />
          </div>
        )}
        {!isMobileResolution ? (
          <div className="pagesBarWrapper">
            <div className="pagesBar" id="nav">
              <div className="linkPointer" id="pointer" />
              {barItems.map((item, index) => (
                <BarItemsComponent
                  key={index}
                  number={item.number}
                  label={item.label}
                  barIndex={index}
                  activeBarIndex={activeBarIndex}
                  setActiveBarIndex={setActiveBarIndex}
                  isTabletResolution={isTabletResolution}
                />
              ))}
            </div>
          </div>
        ) : (
          <div onClick={handleOnMenuIconClick}>
            <MenuIcon />
          </div>
        )}
      </div>
      {el &&
        ReactDOM.createPortal(
          <TransitionMenuComponent
            isTransitionMenuShown={isTransitionMenuShown}
            handleOnMenuIconClick={setIsTransitionMenuShown}
            menuItems={barItems}
            setActiveBarIndex={setActiveBarIndex}
            activeBarIndex={activeBarIndex}
          />,
          el
        )}
    </>
  );
};

TopBarComponent.propTypes = {
  isMobileResolution: PropTypes.bool,
  activeBarIndex: PropTypes.number,
  setActiveBarIndex: PropTypes.any,
  isTabletResolution: PropTypes.bool,
  setIsTransitionMenuShown: PropTypes.func,
  isTransitionMenuShown: PropTypes.func
};
export default TopBarComponent;
