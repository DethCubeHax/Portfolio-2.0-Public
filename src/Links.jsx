import React from 'react';
import './Links.css';
import LinkedIn from './assets/LinkedIn.png';
import Instagram from './assets/Instagram.png';
import WhatsApp from './assets/WhatsApp.png';


const Links = () => {
    return(
        <>
            {window.innerWidth < 600 && <div className='LinksPanelUnderline'></div>}
            {window.innerWidth < 600 && <div className='LinksPanelText'>Want to reach out? Click on any of the links below!</div>}
            <div className="LinksPanel">
                <a href="https://www.linkedin.com/in/nafis-ul-islam-207932230/"><img src={LinkedIn}/></a>
                <a href="https://wa.me/85260621024" ><img src={WhatsApp}/></a>
                <a href="https://www.instagram.com/nafis.ul.islam/"><img src={Instagram}/></a>
            </div>
        </>
        
    )
};

export default Links;