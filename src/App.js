import './App.css';
import { useState } from 'react';
import HomePage from './containers/HomePage';
import TopBarComponent from './components/TopBarComponent';
import React from 'react';
import homeBackgroundDesktop from './assets/home/background-home-desktop.jpg';
import homeBackgroundTablet from './assets/home/background-home-tablet.jpg';
import homeBackgroundMobile from './assets/home/background-home-mobile.jpg';
import destinationBackgroundDesktop from './assets/destination/background-destination-desktop.jpg';
import destinationBackgroundTablet from './assets/destination/background-destination-tablet.jpg';
import destinationBackgroundMobile from './assets/destination/background-destination-mobile.jpg';
import crewBackgroundDesktop from './assets/crew/background-crew-desktop.jpg';
import crewBackgroundTablet from './assets/crew/background-crew-tablet.jpg';
import crewBackgroundMobile from './assets/crew/background-crew-mobile.jpg';
import technologyBackgroundDesktop from './assets/technology/background-technology-desktop.jpg';
import technologyBackgroundTablet from './assets/technology/background-technology-tablet.jpg';
import technologyBackgroundMobile from './assets/technology/background-technology-mobile.jpg';
import DestinationPage from './containers/DestinationPage';
import CrewPage from './containers/CrewPage';
import TechnologyPage from './containers/TechnologyPage';
import { useEffect } from 'react';

const appComponents = [
  {
    component: <HomePage />,
    backgroundImage: homeBackgroundDesktop,
    backgroundImageTablet: homeBackgroundTablet,
    backgroundImageMobile: homeBackgroundMobile
  },
  {
    component: <DestinationPage />,
    backgroundImage: destinationBackgroundDesktop,
    backgroundImageTablet: destinationBackgroundTablet,
    backgroundImageMobile: destinationBackgroundMobile
  },
  {
    component: <CrewPage />,
    backgroundImage: crewBackgroundDesktop,
    backgroundImageTablet: crewBackgroundTablet,
    backgroundImageMobile: crewBackgroundMobile
  },
  {
    component: <TechnologyPage />,
    backgroundImage: technologyBackgroundDesktop,
    backgroundImageTablet: technologyBackgroundTablet,
    backgroundImageMobile: technologyBackgroundMobile
  }
];

function App() {
  const [activeBarIndex, setActiveBarIndex] = useState(0);
  const [isTabletResolution, setIsTabletResolution] = useState(window.screen.width <= 820);
  const [isMobileResolution, setIsMobileResolution] = useState(window.screen.width <= 400);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setIsTabletResolution(window.screen.width >= 450 && window.screen.width <= 820);
      setIsMobileResolution(window.screen.width <= 450);
    });
    return () => {
      window.removeEventListener('resize', () => {
        setIsTabletResolution(undefined);
      });
    };
  });

  const getBackgroundImage = () => {
    const { backgroundImage, backgroundImageTablet, backgroundImageMobile } =
      appComponents[activeBarIndex];
    if (isTabletResolution) {
      return backgroundImageTablet;
    } else if (isMobileResolution) {
      return backgroundImageMobile;
    } else {
      return backgroundImage;
    }
  };

  return (
    <div className="appWrapper">
      <img className="appBackImage" src={getBackgroundImage()} alt="" />
      <div className="appContainer">
        <TopBarComponent
          activeBarIndex={activeBarIndex}
          setActiveBarIndex={setActiveBarIndex}
          isTabletResolution={isTabletResolution}
          isMobileResolution={isMobileResolution}
        />
        {appComponents[activeBarIndex].component}
      </div>
    </div>
  );
}

export default App;
