import React, { useEffect, useRef, useState } from 'react';
import './Home.css';

import LinkedIn from './assets/LinkedIn.png';
import GPAid from './assets/GPAid.jpg';
import Github from './assets/Github.png';
import Calendar from './assets/Calendar.png';
import Tools from './assets/Tools.png';
import Description from './assets/Description.png';
import Fish from './assets/Fish.jpg';
import SmartDisplay from './assets/SmartDisplay.jpeg';
import Sudoku from './assets/Sudoku.png';
import HamburgerMenu from './assets/HamburgerMenu.png';
import Portfolio from './assets/Portfolio.png';
import OldBlog from './assets/OldBlog.png';

import { initializeParticles } from './components/Particles';
import typewriter from './components/Typewriter';
import NavPanel from './NavPanel';
import Sidebar from './Sidebar';

const Projects = () => {
    const canvasRef = useRef(null);
    const titleMNTextRef = useRef(null);
    const titleLNTextRef = useRef(null);
    const [showProjects, setShowProjects] = useState(false);
    const [showDescriptionIndex, setShowDescriptionIndex] = useState(null);
    const [showSidebar, setShowSidebar] = useState(false);
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);

    useEffect(() => {
        setIsSidebarVisible(showSidebar);
    }, [showSidebar]);

    useEffect(() => {
        const cleanup = initializeParticles(canvasRef);

        typewriter(titleMNTextRef.current, 'My', 100, 0.5);
        typewriter(titleLNTextRef.current, 'Projects', 100, 1);

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
                        <img src={HamburgerMenu} className="HomeHeaderTitleButton" alt="Hamburger Menu" style={{ zIndex: "2000" }} onClick={() => setShowSidebar((prevState) => !prevState)} />
                    </div>}
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
                            GPAid HKU Alpha
                        </div>
                        <img className='ProjectImageHolder' src={GPAid} />
                        <div className={`ProjectDate ${isDescriptionShown(0) ? 'show' : ''}`}>
                            <img src={Calendar} />
                            <div>Jan 2022 - Jun 2022</div>
                        </div>
                        <div className="GitHubLink">
                            <img src={Github} />
                            <a href="https://github.com/DethCubeHax/GPAID-Alpha-HKU" rel="noopener noreferrer">
                                Project Source
                            </a>
                        </div>
                        <div className={`ProjectDate ${isDescriptionShown(0) ? 'show' : ''}`}>
                            <img src={Tools} />
                            <div>React, Node, Express, MongoDB</div>
                        </div>
                        <div className={`ProjectDate ${isDescriptionShown(0) ? 'show' : ''}`}>
                            <img src={Description} />
                            <div>Description: {descriptionText}</div>
                        </div>
                        <div className={descriptionClassName(0)}>
                            <div>A course selection app that suggests students courses to take based on the reviews of past course takers, as well as their grades.</div>
                            <div>Built using the MERN stack,with React for the front-end, Node.js and Express for the back-end, and MongoDB for the database.</div>
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
                            Robotic Fish, BREED
                        </div>
                        <img className='ProjectImageHolder' src={Fish} />
                        <div className={`ProjectDate ${isDescriptionShown(1) ? 'show' : ''}`}>
                            <img src={Calendar} />
                            <div>Jun 2022 - Present</div>
                        </div>
                        <div className="GitHubLink">
                            <img src={Github} />
                            <a href="https://github.com/DethCubeHax/GPAID-Alpha-HKU" rel="noopener noreferrer">
                                Project Source
                            </a>
                        </div>
                        <div className={`ProjectDate ${isDescriptionShown(1) ? 'show' : ''}`}>
                            <img src={Tools} />
                            <div>C++, ROS, Python, EasyEDA</div>
                        </div>
                        <div className={`ProjectDate ${isDescriptionShown(1) ? 'show' : ''}`}>
                            <img src={Description} />
                            <div>Description: {descriptionText}</div>
                        </div>
                        <div className={descriptionClassName(1)}>
                            <div>As the Embedded Systems Technical Lead of the Student Interest Group, <a href="https://innowings.engg.hku.hk/breed2022/">BREED HKU</a>, I worked alongside a team of talented engineers to develop our flagship robotic fish, holding the Guinness World Record for the fastest swimming fish in the world.</div>
                            <div>I developed the code for the fish's fins and the main motor. I also devised an algorithm to optimize the turning by using the quadrature encoder on the motor to analyse the tail fin position, and use it directly to turn the fish, greatly improving turning efficacy.</div>
                            <div>In addition, I optimized the electrical systems by developing robust, drop-in PCBs for the mainboard and the controller. Currently, I am focusing on migrating the system away to a Raspberry Pi based system for integration of advanced sensors using ROS.</div>
                        </div>
                    </div>
                </div>

                {/* Project #3 */}
                <div className="ProjectCard">
                    <div
                        className={`ProjectCardContent ${showProjects ? 'show' : ''}`}
                        onClick={() => toggleDescription(2)}
                    >
                        <div className='ProjectCardTitle'>
                            Sudoku Game
                        </div>
                        <img className='ProjectImageHolder' src={Sudoku} />
                        <div className={`ProjectDate ${isDescriptionShown(2) ? 'show' : ''}`}>
                            <img src={Calendar} />
                            <div>Dec 2022</div>
                        </div>
                        <div className="GitHubLink">
                            <img src={Github} />
                            <a href="https://github.com/DethCubeHax/ENGG1340-Project" rel="noopener noreferrer">
                                Project Source
                            </a>
                        </div>
                        <div className={`ProjectDate ${isDescriptionShown(2) ? 'show' : ''}`}>
                            <img src={Tools} />
                            <div>C++</div>
                        </div>
                        <div className={`ProjectDate ${isDescriptionShown(2) ? 'show' : ''}`}>
                            <img src={Description} />
                            <div>Description: {descriptionText}</div>
                        </div>
                        <div className={descriptionClassName(2)}>
                            <div>As part of a course project, I developed a sudoku game purely in C++.</div>
                            <div>It features the ability to find unique boards every single time, where the player plays against the computer.</div>
                            <div>Also features save and load options.</div>
                        </div>
                    </div>
                </div>

                {/* Project 4 */}
                <div className="ProjectCard">
                    <div
                        className={`ProjectCardContent ${showProjects ? 'show' : ''}`}
                        onClick={() => toggleDescription(3)}
                    >
                        <div className='ProjectCardTitle'>
                            Arduino Smart Display
                        </div>
                        <img className='ProjectImageHolder' src={SmartDisplay} />
                        <div className={`ProjectDate ${isDescriptionShown(3) ? 'show' : ''}`}>
                            <img src={Calendar} />
                            <div>Mar 2021</div>
                        </div>
                        <div className="GitHubLink">
                            <img src={Github} />
                            <a href="https://github.com/DethCubeHax/Arduino_Smart_Display" rel="noopener noreferrer">
                                Project Source
                            </a>
                        </div>
                        <div className={`ProjectDate ${isDescriptionShown(3) ? 'show' : ''}`}>
                            <img src={Tools} />
                            <div>C++, Arduino</div>
                        </div>
                        <div className={`ProjectDate ${isDescriptionShown(3) ? 'show' : ''}`}>
                            <img src={Description} />
                            <div>Description: {descriptionText}</div>
                        </div>
                        <div className={descriptionClassName(3)}>
                            <div>
                                <p>
                                    The `Smart_Display.ino` Arduino project is a multifunctional smart display that uses a DS3231 Real-Time Clock (RTC) module to display time and date on a TFT TouchScreen.
                                </p>

                                <p>
                                    This project is customizable, allowing users to switch time display modes, adjust alarms, and toggle logging. It supports multiple alarms and uses a buzzer for alerts.
                                </p>

                                <p>
                                    It can display temperature data, indicating potential use in weather monitoring. The system uses an SD card to render .bmp images on the screen for custom visuals.
                                </p>

                                <p>
                                    The project manages the power of the DS3231 RTC module directly from the Arduino, simplifying the wiring. It's a flexible Arduino system that can serve as an alarm clock, weather station, or a general-purpose display.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Project 5 */}
                <div className="ProjectCard">
                    <div
                        className={`ProjectCardContent ${showProjects ? 'show' : ''}`}
                        onClick={() => toggleDescription(4)}
                    >
                        <div className='ProjectCardTitle'>
                            Personal Portfolio/Blog
                        </div>
                        <img className='ProjectImageHolder' src={Portfolio} />
                        <div className={`ProjectDate ${isDescriptionShown(4) ? 'show' : ''}`}>
                            <img src={Calendar} />
                            <div>Nov 2022</div>
                        </div>
                        <div className="GitHubLink">
                            <img src={Github} />
                            <a href="https://github.com/DethCubeHax/Portfolio-2.0-Public" rel="noopener noreferrer">
                                Project Source
                            </a>
                        </div>
                        <div className={`ProjectDate ${isDescriptionShown(4) ? 'show' : ''}`}>
                            <img src={Tools} />
                            <div>Vite.JS, Node.JS</div>
                        </div>
                        <div className={`ProjectDate ${isDescriptionShown(4) ? 'show' : ''}`}>
                            <img src={Description} />
                            <div>Description: {descriptionText}</div>
                        </div>
                        <div className={descriptionClassName(4)}>
                            <div>
                                <p>Welcome to my digital portfolio, a showcase of my software and hardware projects.</p>
                                <p>Designed for an engaging experience, my site features interactive elements like a typewriter effect and animated project cards, and many more effects!</p>
                                <p>Discover a variety of projects I've developed, each with detailed information and a link to the GitHub source code.</p>
                                <p>With responsive design at its core, my site offers optimal viewing on any screen, complete with a hamburger menu for easy navigation on smaller devices.</p>
                                <p>Whether you're a potential employer, a developer, or a tech enthusiast, I invite you to explore my work. Enjoy the journey!</p></div>
                        </div>
                    </div>
                </div>
                {/* Project 5 */}
                <div className="ProjectCard">
                    <div
                        className={`ProjectCardContent ${showProjects ? 'show' : ''}`}
                        onClick={() => toggleDescription(5)}
                    >
                        <div className='ProjectCardTitle'>
                            NelsonTalks (Deprecated)
                        </div>
                        <img className='ProjectImageHolder' src={OldBlog} />
                        <div className={`ProjectDate ${isDescriptionShown(5) ? 'show' : ''}`}>
                            <img src={Calendar} />
                            <div>Mar 2021</div>
                        </div>
                        <div className="GitHubLink">
                            <img src={Github} />
                            <a href="https://github.com/DethCubeHax/My-Blog" rel="noopener noreferrer">
                                Project Source
                            </a>
                        </div>
                        <div className={`ProjectDate ${isDescriptionShown(5) ? 'show' : ''}`}>
                            <img src={Tools} />
                            <div>Flask, SQLite3, Vanilla JS</div>
                        </div>
                        <div className={`ProjectDate ${isDescriptionShown(5) ? 'show' : ''}`}>
                            <img src={Description} />
                            <div>Description: {descriptionText}</div>
                        </div>
                        <div className={descriptionClassName(5)}>
                            <div>
                                <p>
                                    My very first web development project, a personal blog built using Flask and SQLite3.
                                </p>
                                <p>
                                    It features access to content on the homepage, with an SQLite database for handling user accounts, storing articles to read later, and user comments on various posts.
                                </p>
                                <p>
                                    Unfortunately due to costs, I had to shut down the server on AWS, but the source code is still available on GitHub.
                                </p>
                            </div>
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

export default Projects;