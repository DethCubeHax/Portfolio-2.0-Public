import React, { useEffect, useRef, useState } from 'react';
import './Home.css';
import './Projects.css';

import Calendar from './assets/Calendar.png';
import Tools from './assets/Tools.png';
import Description from './assets/Description.png';
import WorkIcon from './assets/Work.png';
import RA from './assets/RA.jpg';
import Webviz from './assets/Webviz.jpg';
import HamburgerMenu from './assets/HamburgerMenu.png';

import { initializeParticles } from './components/Particles';
import typewriter from './components/Typewriter';
import NavPanel from './NavPanel';
import Sidebar from './Sidebar';

const Work = () => {
    const canvasRef = useRef(null);
    const titleMNTextRef = useRef(null);
    const titleLNTextRef = useRef(null);
    const [showProjects, setShowProjects] = useState(false);
    const [showDescriptionIndex, setShowDescriptionIndex] = useState(null);
    const [showSidebar, setShowSidebar] = useState(false);
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);

    useEffect(() => {
        const cleanup = initializeParticles(canvasRef);

        typewriter(titleMNTextRef.current, 'Work', 100, 0);
        typewriter(titleLNTextRef.current, 'Experiences', 100, 0.5);

        const timer = setTimeout(() => {
            setShowProjects(true);
        }, 1000); // Wait for 1 second before showing the projects

        return () => {
            clearTimeout(timer);
            cleanup();
        };
    }, []);

    useEffect(() => {
        if (showProjects) {
            const projectCards = document.querySelectorAll('.ProjectCard');
            projectCards.forEach((card, index) => {
                if (index === 0) {
                    card.classList.add('show');
                } else {
                    setTimeout(() => {
                        card.classList.add('show');
                    }, index * 500); // Delay each card by 500 milliseconds
                }
            });
        }
    }, [showProjects]);

  useEffect(() => {
    // Add the fade-in effect to the sidebar
    setIsSidebarVisible(showSidebar);
  }, [showSidebar]);

    const toggleDescription = (index) => {
        if (showDescriptionIndex === index) {
            setShowDescriptionIndex(null);
        } else {
            setShowDescriptionIndex(index);
        }
    };

    const isDescriptionShown = (index) => showDescriptionIndex === index;

    const descriptionText = showDescriptionIndex !== null ? '' : 'Click to expand';

    const descriptionClassName = (index) =>
        `Description ${isDescriptionShown(index) ? 'show' : ''} ${isDescriptionShown(index) ? '' : 'hidden'}`;

    return (
        <div className="Home" id="Home">
            <div className="HomeHeader">
                <div></div>
                <div className="HomeHeaderTitle">
                    <div className="HomeHeaderTitleHolder">
                        <div className="HomeHeaderTitleMN" ref={titleMNTextRef}></div>
                        <div className="HomeHeaderTitleLN" ref={titleLNTextRef}></div>
                    </div>
                    <div className="HomeHeaderTitleButtonHolder"></div>
                </div>
                {window.innerWidth < 600 && 
                  <div className="HomeHeaderTitleButtonHolder" style={{ paddingRight: "10px" }}>
                    <img src={HamburgerMenu} className="HomeHeaderTitleButton" alt="Hamburger Menu" style={{zIndex:"2000"}} onClick={() => setShowSidebar((prevState) => !prevState)}/>
                  </div>
            }
            </div>

            {window.innerWidth > 600 && <div className='Spacer'></div>}
            <div className="ContentWindow">
                {/* Project #1, GPAID HKU Alpha */}
                <div className="ProjectCard">
                    <div
                        className={`ProjectCardContent ${showProjects ? 'show' : ''}`}
                        onClick={() => toggleDescription(0)}
                    >
                        <div className='ProjectCardTitle'>
                            Student RA
                        </div>
                        <img className='ProjectImageHolder' src={RA} />
                        <div className={`ProjectDate ${isDescriptionShown(0) ? 'show' : ''}`}>
                            <img src={Calendar} />
                            <div>May 2022 - Aug 2022</div>
                        </div>
                        <div className="GitHubLink">
                            <img src={WorkIcon} />
                            <a href="https://www.hku.hk/" rel="noopener noreferrer">
                                The University of Hong Kong
                            </a>
                        </div>
                        <div className={`ProjectDate ${isDescriptionShown(0) ? 'show' : ''}`}>
                            <img src={Tools} />
                            <div>Unity, Blender, Quest SDK</div>
                        </div>
                        <div className={`ProjectDate ${isDescriptionShown(0) ? 'show' : ''}`}>
                            <img src={Description} />
                            <div>Description: {descriptionText}</div>
                        </div>
                        <div className={descriptionClassName(0)}>
                            <div>In 3 months, I worked as a Student Research Assistant to develop a digital twin of the <a href="https://innowings.engg.hku.hk/">Innovation Wing</a> compound at HKU, with interactable VR objects.</div>
                            <div>The 3D model was developed from scratch using the CAD model of the Innovation Wing with the textures applied.</div>
                            <div>During the COVID-19 pandemic, the twin was used to co-host the 7th Engineering Innoshow to allow guests to attend the event online, garnering over 4000 visitors.</div>
                        </div>
                    </div>
                </div>

                {/* Project #2 */}
                <div className="ProjectCard">
                    <div
                        className={`ProjectCardContent ${showProjects ? 'show' : ''}`}
                        onClick={() => toggleDescription(1)}
                    >
                        <div className='ProjectCardTitle'>
                            Software Engineer
                        </div>
                        <img className='ProjectImageHolder' src={Webviz} />
                        <div className={`ProjectDate ${isDescriptionShown(1) ? 'show' : ''}`}>
                            <img src={Calendar} />
                            <div>May 2023 - Aug 2023</div>
                        </div>
                        <div className="GitHubLink">
                            <img src={WorkIcon} />
                            <a href="https://www.kodifly.com/" rel="noopener noreferrer">
                                Kodifly Limited
                            </a>
                        </div>
                        <div className={`ProjectDate ${isDescriptionShown(1) ? 'show' : ''}`}>
                            <img src={Tools} />
                            <div>Vite.JS, ROS, Blender, Python,</div>
                        </div>
                        <div className={`ProjectDate ${isDescriptionShown(1) ? 'show' : ''}`}>
                            <img src={Description} />
                            <div>Description: {descriptionText}</div>
                        </div>
                        <div className={descriptionClassName(1)}>
                            <div>Equipped with my vast knowledge of software development while at BREED HKU, I developed a LiDAR and Camera feed visualizer on a web interface using Vite.JS and Three.JS, alongside ROS. This interface could detect and draw bounding boxes around vehnicles and pedestrians, and allowed the user to add collision detectors of any shape or form to detect if an object passed through it.</div>
                            <div>I also developed a module for Blender to simulate a LiDAR object and obtain LiDAR samples from scenes within Blender, which the company is using to simulate landslides and collect samples to train an AI to detect landslides.</div>
                        </div>
                    </div>
                </div>
            </div>
            <canvas className="Particles" ref={canvasRef}></canvas>
            {window.innerWidth > 600 && <NavPanel />}

            {isSidebarVisible && <Sidebar onClose={() => setShowSidebar((prevState) => !prevState)} />}

        </div>
    );
};

export default Work;