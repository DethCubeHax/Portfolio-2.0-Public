import React, { useState, useEffect } from 'react';
import DethCubeHax from './assets/DethCubeHax.png';
import Research from './assets/Research.png';
import Hamburger from './assets/HamburgerMenu.png';
import Work from './assets/Work.png';
import Project from './assets/Project.png';
import Blog from './assets/Blog.png';
import Mail from './assets/Mail.png';
const NavPanel = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 150);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (

    <div className={`NavPanel${isLoaded ? ' loaded' : ''}`}>
      <a className='PanelButtonContainer' href="/">
        <img src={DethCubeHax} className="NavPanelButton" alt="DethCubeHax" />
        <div>Home</div>
      </a>
      <a className='PanelButtonContainer' href="projects">
        <img src={Project} className="NavPanelButton" alt="Project" />
        <div>Projects</div>
      </a>

      <a className='PanelButtonContainer' href="work">
        <img src={Work} className="NavPanelButton" alt="Work" />
        <div>Work</div>
      </a>
      <a className='PanelButtonContainer' href="research">
        <img src={Research} className="NavPanelButton" alt="Research" />
        <div>Research</div>
      </a>
      <a className='PanelButtonContainer' href="blog">
        <img src={Blog} className="NavPanelButton" alt="Art" />
        <div>Blog</div>
      </a>
      <a className='PanelButtonContainer' href="mailto:ultimate.nafis.bhadra11@gmail.com">
        <img src={Mail} className="NavPanelButton" alt="Mail" />
        <div>Mail</div>
      </a>


    </div>
  );
};

export default NavPanel;