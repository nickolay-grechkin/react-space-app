import './App.css';
import {useState} from "react";
import HomePage from "./containers/HomePage";
import TopBarComponent from "./components/TopBarComponent";
import React from "react";
import homeBackground from './assets/home/background-home-desktop.jpg';
import destinationBackground from './assets/destination/background-destination-desktop.jpg';
import crewBackground from './assets/crew/background-crew-desktop.jpg';
import technologyBackground from './assets/technology/background-technology-desktop.jpg';
import DestinationPage from "./containers/DestinationPage";
import CrewPage from "./containers/CrewPage";
import TechnologyPage from "./containers/TechnologyPage";

const appComponents = [
    {
        component: <HomePage />,
        backgroundImage: homeBackground
    },
    {
        component: <DestinationPage />,
        backgroundImage: destinationBackground
    },
    {
        component: <CrewPage />,
        backgroundImage: crewBackground
    },
    {
        component: <TechnologyPage />,
        backgroundImage: technologyBackground
    }
]

function App() {
    const [activeBarIndex, setActiveBarIndex] = useState(0);
    console.log(window.screen.width);
    return (
        <div className="appWrapper">
            <img className="appBackImage" src={appComponents[activeBarIndex].backgroundImage} />
            <div className="appContainer">
                <TopBarComponent props={{
                    activeBarIndex,
                    setActiveBarIndex
                }}/>
                {/*{appComponents[activeBarIndex].component}*/}
            </div>
        </div>
  );
}

export default App;
