import React, { useEffect, useState } from 'react';
import './styles.css';
import PageHeader from '../../components/PageHeader';
import capsuleImage from '../../assets/technology/image-space-capsule-portrait.jpg';
import vehicleLaunchImage from '../../assets/technology/image-launch-vehicle-portrait.jpg';
import spacePortImage from '../../assets/technology/image-spaceport-portrait.jpg';
import capsuleImageLandscape from '../../assets/technology/image-space-capsule-landscape.jpg';
import vehicleLaunchImageLandscape from '../../assets/technology/image-launch-vehicle-landscape.jpg';
import spacePortImageLandscape from '../../assets/technology/image-spaceport-landscape.jpg';

const technologies = [
  {
    name: 'Launch vehicle',
    description:
      'A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a \n' +
      "  payload from Earth's surface to space, usually to Earth orbit or beyond. Our \n" +
      '  WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, \n' +
      "  it's quite an awe-inspiring sight on the launch pad!",
    img: vehicleLaunchImage,
    landscapeImg: vehicleLaunchImageLandscape
  },
  {
    name: 'Spaceport',
    description:
      'A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, \n' +
      '  by analogy to the seaport for ships or airport for aircraft. Based in the \n' +
      '  famous Cape Canaveral, our spaceport is ideally situated to take advantage \n' +
      '  of the Earth’s rotation for launch.',
    img: spacePortImage,
    landscapeImg: spacePortImageLandscape
  },
  {
    name: 'Space capsule',
    description:
      'A space capsule is an often-crewed spacecraft that uses a blunt-body reentry \n' +
      "  capsule to reenter the Earth's atmosphere without wings. Our capsule is where \n" +
      "  you'll spend your time during the flight. It includes a space gym, cinema, \n" +
      '  and plenty of other activities to keep you entertained.',
    img: capsuleImage,
    landscapeImg: capsuleImageLandscape
  }
];
const TechnologyPage = () => {
  const [selectedSlide, setSelectedSlide] = useState(0);

  const [isTabletResolution, setIsTabletResolution] = useState(window.screen.width <= 820);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setIsTabletResolution(window.screen.width <= 820);
    });
    return () => {
      window.removeEventListener('resize', () => {
        setIsTabletResolution(undefined);
      });
    };
  }, [setIsTabletResolution]);

  return (
    <div className="technologyWrapper">
      <PageHeader pageNumber={'03'} pageTitle={'Space launch 101'} />
      <div className="technologyContainer">
        <div className="detailsSliderContainer">
          <div className="technologySlider">
            {technologies.map((value, index) => (
              <div
                key={index}
                onClick={() => setSelectedSlide(index)}
                className={`${
                  selectedSlide !== index ? 'slideButton slideButtonDisable' : 'slideButton'
                }`}
              >
                {index + 1}
              </div>
            ))}
          </div>
          <div className="technologyDetails">
            <div className="techTitle">The terminology...</div>
            <div className="techName">{technologies[selectedSlide].name}</div>
            <div className="techDescription">{technologies[selectedSlide].description}</div>
          </div>
        </div>
        <div className="technologyPicture">
          <img
            src={
              isTabletResolution
                ? technologies[selectedSlide].landscapeImg
                : technologies[selectedSlide].img
            }
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default TechnologyPage;
