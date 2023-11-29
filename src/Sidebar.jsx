import React, { useEffect } from 'react';
import DethCubeHax from './assets/DethCubeHax.png';
import Research from './assets/Research.png';
import Hamburger from './assets/HamburgerMenu.png';
import Work from './assets/Work.png';
import Project from './assets/Project.png';
import Blog from './assets/Blog.png';
import Mail from './assets/Mail.png';
import LinkedIn from './assets/LinkedIn.png';
import GitHub from './assets/Github.png';
import Instagram from './assets/Instagram.png';
import './Sidebar.css';
import { redirect } from 'react-router-dom';

const Sidebar = ({ onClose }) => {
    useEffect(() => {
        // Add the fade-in class to the Sidebar element after it has been rendered
        const sidebarElement = document.querySelector('.Sidebar');
        if (sidebarElement) {
            sidebarElement.classList.add('fade-in');
        }
    }, []);

    return (
        <div className="Sidebar">
            <div className="Spacer"></div>
            
            <a className="NavElement" href="/">
                <img src={DethCubeHax} className="NavElementImage" alt="DethCubeHax" />
                <div className="NavElementText">Home</div>
            </a>
            <a className="NavElement" href="projects">
                <img src={Project} className="NavElementImage" alt="DethCubeHax" />
                <div className="NavElementText">Projects</div>
            </a>
            <a className="NavElement" href="work">
                <img src={Work} className="NavElementImage" alt="DethCubeHax" />
                <div className="NavElementText">Work</div>
            </a>
            <a className="NavElement" href="research">
                <img src={Research} className="NavElementImage" alt="DethCubeHax" />
                <div className="NavElementText">Research</div>
            </a>
            <a className="NavElement" href="blog">
                <img src={Blog} className="NavElementImage" alt="DethCubeHax" />
                <div className="NavElementText">Blog</div>
            </a>
            <a className="NavElement" href="https://www.github.com/DethCubeHax">
                <img src={GitHub} className="NavElementImage" alt="DethCubeHax" />
                <div className="NavElementText">GitHub</div>
            </a>
            <a className="NavElement" href="https://www.linkedin.com/in/nafis-ul-islam-207932230/">
                <img src={LinkedIn} className="NavElementImage" alt="DethCubeHax" />
                <div className="NavElementText">LinkedIn</div>
            </a>
            <a className="NavElement" href="https://www.instagram.com/nafis.ul.islam/">
                <img src={Instagram} className="NavElementImage" alt="DethCubeHax" />
                <div className="NavElementText">Instagram</div>
            </a>
            {/* Mail to "ultimate.nafis.bhadra11@gmail.com" */}
            <a className="NavElement" href="mailto:ultimate.nafis.bhadra11@gmail.com">
                <img src={Mail} className="NavElementImage" alt="DethCubeHax" />
                <div className="NavElementText">Contact</div>
            </a>
        </div>
    );
};

export default Sidebar;