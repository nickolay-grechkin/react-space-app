import PlanetsBarComponent from "../PlanetsBarComponent";
import React, {useEffect, useState} from "react";

const PlanetsDetailedComponent = ({props}) => {
    const [shownPlanet, setShownPlanet] = useState();

    useEffect(() => {
        setShownPlanet(props.planetsDetailedInfo[props.selectedTabNumber]);
    }, [props.selectedTabNumber]);
    return (
        <div className="planetsDetailedContainer">
            <PlanetsBarComponent
                props={{
                    planetsLabels: props.planetsLabels,
                    setSelectedTabNumber: props.setSelectedTabNumber
                }}
            />
            <div style={{display: 'flex'}}>
                {/*<div>*/}
                {/*    <div className="planetName">*/}
                {/*        {shownPlanet?.name}*/}
                {/*    </div>*/}
                {/*    <div className="planetDescription">*/}
                {/*        {shownPlanet?.description}*/}
                {/*    </div>*/}
                {/*    <div className="planetDistanceData">*/}
                {/*        <div className="distanceInfo">*/}
                {/*            <div className="label">Avg. distance</div>*/}
                {/*            <div className="number">{shownPlanet?.planetDistanceData}</div>*/}
                {/*        </div>*/}
                {/*        <div className="travelInfo">*/}
                {/*            <div className="label">Est. travel time</div>*/}
                {/*            <div className="number">{shownPlanet?.travelInfo}</div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <div>
                    {props.planetsDetailedInfo.map((planet, index) => (
                         <div style={props.selectedTabNumber === index ? {
                             position: 'absolute', width: '30%', transform: 'translate(0, 0)', transition: '.3s'
                         } : {
                             visibility: 'hidden', position: 'absolute', width: '30%', transform: 'translate(100%, 0)', transition: '.3s'
                         }}>
                             <div className="planetName">
                                 {planet.name}
                             </div>
                             <div className="planetDescription">
                                 {planet.description}
                             </div>
                             <div className="planetDistanceData">
                                 <div className="distanceInfo">
                                    <div className="label">Avg. distance</div>
                                     <div className="number">{planet.planetDistanceData}</div>
                                 </div>
                                 <div className="travelInfo">
                                     <div className="label">Est. travel time</div>
                                     <div className="number">{planet.travelInfo}</div>
                                 </div>
                            </div>
                         </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default PlanetsDetailedComponent;