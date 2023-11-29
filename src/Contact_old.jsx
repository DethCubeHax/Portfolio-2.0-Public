import React, { useEffect, useRef, useState } from 'react';
import './Home.css';
import './Projects.css';

import GPAid from './assets/GPAid.jpg';
import Calendar from './assets/Calendar.png';
import Description from './assets/Description.png';
import ResearchIcon from './assets/Research.png';
import WorkIcon from './assets/Work.png';

import { initializeParticles } from './components/Particles';
import typewriter from './components/Typewriter';
import NavPanel from './NavPanel';

const Research = () => {
    const canvasRef = useRef(null);
    const titleMNTextRef = useRef(null);
    const titleLNTextRef = useRef(null);
    const [showProjects, setShowProjects] = useState(false);
    const [showDescriptionIndex, setShowDescriptionIndex] = useState(null);

    useEffect(() => {
        const cleanup = initializeParticles(canvasRef);

        typewriter(titleMNTextRef.current, 'Contact', 100, 0.5);
        typewriter(titleLNTextRef.current, 'Me', 100, 1);

        const timer = setTimeout(() => {
            setShowProjects(true);
        }, 1000); // Wait for 1 second before showing the projects

        return () => {
            clearTimeout(timer);
            cleanup();
        };
    }, []);

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
            </div>
            <div className="SpacerHeader"></div>

            {window.innerWidth > 600 && <div className='Spacer'></div>}
            <div className="ContentWindow">

            </div>
            <canvas className="Particles" ref={canvasRef}></canvas>
            {window.innerWidth > 600 && <NavPanel />}
        </div>
    );
};

export default Research;