import React, {useState} from "react";
import './styles.css';
import PageHeader from "../../components/PageHeader";
import capsuleImage from '../../assets/technology/image-space-capsule-portrait.jpg';
import vehicleLaunchImage from '../../assets/technology/image-launch-vehicle-portrait.jpg'
import spacePortImage from '../../assets/technology/image-spaceport-portrait.jpg'

const technologies = [
    {
        name: 'Launch vehicle',
        description: 'A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a \n' +
            '  payload from Earth\'s surface to space, usually to Earth orbit or beyond. Our \n' +
            '  WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, \n' +
            '  it\'s quite an awe-inspiring sight on the launch pad!',
        img: vehicleLaunchImage
    },
    {
        name: 'Spaceport',
        description: 'A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, \n' +
            '  by analogy to the seaport for ships or airport for aircraft. Based in the \n' +
            '  famous Cape Canaveral, our spaceport is ideally situated to take advantage \n' +
            '  of the Earth’s rotation for launch.',
        img:spacePortImage
    },
    {
        name: 'Space capsule',
        description: 'A space capsule is an often-crewed spacecraft that uses a blunt-body reentry \n' +
            '  capsule to reenter the Earth\'s atmosphere without wings. Our capsule is where \n' +
            '  you\'ll spend your time during the flight. It includes a space gym, cinema, \n' +
            '  and plenty of other activities to keep you entertained.',
        img: capsuleImage
    }
]
const TechnologyPage = () => {
    const [selectedSlide, setSelectedSlide] = useState(0);

    return (
        <div className="technologyWrapper">
            <PageHeader props={{
                    pageNumber: '03',
                    pageTitle: 'Space launch 101'
                }}
            />
            <div className="technologyContainer">
                <div className="detailsSliderContainer">
                    <div className="technologySlider">
                        {technologies.map((value, index) => (
                            <div className={`${selectedSlide !== index ? 'slideButton slideButtonDisable' : 'slideButton'}`}>
                                {index + 1}
                            </div>
                        ))}
                    </div>
                    <div className='technologyDetails'>
                        <div className='techTitle'>The terminology...</div>
                        <div className='techName'>{technologies[selectedSlide].name}</div>
                        <div className='techDescription'>{technologies[selectedSlide].description}</div>
                    </div>
                </div>
                <div className='technologyPicture'>
                    <img src={technologies[selectedSlide].img} />
                </div>
            </div>
        </div>
    );
}

export default TechnologyPage;