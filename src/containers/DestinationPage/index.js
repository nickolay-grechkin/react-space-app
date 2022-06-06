import React, {useState} from "react";
import Moon from '../../assets/destination/image-moon.png';
import Europa from '../../assets/destination/image-europa.png';
import Mars from '../../assets/destination/image-mars.png';
import Titan from '../../assets/destination/image-titan.png';
import './styles.css';
import PlanetsViewComponent from "../../components/PlanetsViewComponent";
import PlanetsBarComponent from "../../components/PlanetsBarComponent";

const planetsData = [
    { image: Moon },
    { image: Mars },
    { image: Europa },
    { image: Titan }
];

const planetsLabels = [
    { label: 'Moon' },
    { label: 'Mars' },
    { label: 'Europa' },
    { label: 'Titan' }
];

const DestinationPage = () => {
    const [selectedTabNumber, setSelectedTabNumber] = useState(0);

    return (
      <div className="destinationWrapper">
          <div className="destinationContainer">
            <div className="planetContainer">
                <div className="planetTitle">
                    <span className="planetNumber">01</span> Pick your destination
                </div>
                {planetsData.map((data, index) => (
                    <PlanetsViewComponent props={{
                        image: data.image,
                        selectedTabNumber: selectedTabNumber,
                        tabNumber: index
                    }}
                    />
                ))}
            </div>
              <div className="planetsDetailedContainer">
                  <PlanetsBarComponent
                    props={{
                        planetsLabels,
                        setSelectedTabNumber
                    }}
                  />
                  <div className="planetName">
                      Mars
                  </div>
                  <div className="planetDescription">
                      See our planet as you’ve never seen it before. A perfect relaxing trip away to help
                      regain perspective and come back refreshed. While you’re there, take in some history
                      by visiting the Luna 2 and Apollo 11 landing sites.
                  </div>
                  <div>
                      Avg. distance
                      384,400 km

                      Est. travel time
                      3 days
                  </div>
              </div>
          </div>
      </div>
    );
}

export default DestinationPage;