import React from "react";
import './styles.css';

const HomePage = () => {
    return (
        <div className="homeWrapper">
                <div className="bottomContentWrapper">
                    <div className="bottomContentContainer">
                        <div className="descriptionContainer">
                            <div className="descriptionHeader">
                                SO, YOU WANT TO TRAVEL TO
                            </div>
                            <div className="descriptionMiddle">
                                SPACE
                            </div>
                            <div className="descriptionBottom">
                                Let’s face it; if you want to go to space, you might as well genuinely go to
                                outer space and not hover kind of on the edge of it. Well sit back, and relax
                                because we’ll give you a truly out of this world experience!
                            </div>
                        </div>
                        <div className="exploreButtonContainer">
                            <div className="exploreButton">
                                EXPLORE
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default HomePage;