import React, { useEffect, useRef, useState } from 'react';
import './Home.css';
import './Projects.css';

import Calendar from './assets/Calendar.png';
import Description from './assets/Description.png';
import ResearchIcon from './assets/Research.png';
import WorkIcon from './assets/Work.png';
import UnderwaterComms from './assets/UnderwaterComms.png';
import HamburgerMenu from './assets/HamburgerMenu.png';

import { initializeParticles } from './components/Particles';
import typewriter from './components/Typewriter';
import NavPanel from './NavPanel';
import Links from './Links';
import Sidebar from './Sidebar';

const Research = () => {
    const canvasRef = useRef(null);
    const titleMNTextRef = useRef(null);
    const titleLNTextRef = useRef(null);
    const [showProjects, setShowProjects] = useState(false);
    const [showDescriptionIndex, setShowDescriptionIndex] = useState(null);
    const [showSidebar, setShowSidebar] = useState(false);
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);

    useEffect(() => {
        const cleanup = initializeParticles(canvasRef);

        typewriter(titleMNTextRef.current, 'My', 100, 0.5);
        typewriter(titleLNTextRef.current, 'Research', 100, 1);

        const timer = setTimeout(() => {
            setShowProjects(true);
        }, 1000); // Wait for 1 second before showing the projects

        return () => {
            clearTimeout(timer);
            cleanup();
        };
    }, []);


    useEffect(() => {
        setIsSidebarVisible(showSidebar);
      }, [showSidebar]);

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
                  <div className="HomeHeaderTitleButtonHolder" style={{paddingRight: "10px"}}>
                    <img src={HamburgerMenu} className="HomeHeaderTitleButton" alt="Hamburger Menu" style={{zIndex:"2000"}} onClick={() => setShowSidebar((prevState) => !prevState)}/>
                  </div>}
            </div>
            <div className="ContentWindow">
                {/* Project #1, GPAID HKU Alpha */}
                <div className="ProjectCard">
                    <div
                        className={`ProjectCardContent ${showProjects ? 'show' : ''}`}
                        onClick={() => toggleDescription(0)}
                    >
                        <div className='ProjectCardTitle'>
                        Design and Implementation of a Cost-Efficient Underwater Communication System
                        </div>
                        <img className='ProjectImageHolder' src={UnderwaterComms} />
                        <div className={`ProjectDate ${isDescriptionShown(0) ? 'show' : ''}`}>
                            <img src={Calendar} />
                            <div>Jan 2023 - Mar 2023</div>
                        </div>
                        <div className="GitHubLink">
                            <img src={ResearchIcon} />
                            <a href="https://isam2023.exordo.com/files/papers/78/final_draft/N_U_Islam__K_L_Chung__T_J_K_Ng__78.pdf" rel="noopener noreferrer">
                                Publication
                            </a>
                        </div>
                        <div className="GitHubLink">
                            <img src={WorkIcon} />
                            <a href="https://isam2023.hemi-makers.org/" rel="noopener noreferrer">
                                ISAM 2023
                            </a>
                        </div>
                        <div className={`ProjectDate ${isDescriptionShown(0) ? 'show' : ''}`}>
                            <img src={Description} />
                            <div>Description: {descriptionText}</div>
                        </div>
                        <div className={descriptionClassName(0)}>
                            <div>Recognizing the importance of underwater communication between the control stations and the robots, I, alongside two other engineers developed a stable and robust communication system on a low budget. This paper presents our prototyping, methodology and the performance of the system</div>
                            <div>The controller comprises of a drop-in, easy to build PCB designed using EasyEDA, with 2 joysticks, 1 potentiometer and 2 push buttons that can be mapped to any control for a range of underwater robots.</div>
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

export default Research;