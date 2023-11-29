import React, { useEffect, useState } from 'react';
import { Progress } from 'react-sweet-progress';
import './Love.css';

function Love() {
  const [typedText, setTypedText] = useState('');
  const [showTime, setShowTime] = useState(false);
  const [timeSince, setTimeSince] = useState({
    months: 0,
    days: 0,
    hours: 0, 
    seconds: 0,
  });
  const [imageIndex, setImageIndex] = useState(0);
  const [imageFadeIn, setImageFadeIn] = useState(true);
  const [textVisible, setTextVisible] = useState(false);
  const [additionalDivVisible, setAdditionalDivVisible] = useState(false);
  const [images] = useState([
    'tusi-min-1.png',
    'tusi-min-2.png',
    'tusi-min-3.png',
  ]);

  useEffect(() => {
    const text = 'Hey, Ms. Tusi! <3';
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      setTypedText(text.slice(0, currentIndex));
      currentIndex++;

      if (currentIndex > text.length) {
        clearInterval(intervalId);
        setTimeout(() => setShowTime(true), 1000);
      }
    }, 100);

    const calculateTimeSince = () => {
      const targetDate = new Date('June 30, 2023');
      const currentDate = new Date();

      const timeDifference = Math.abs(currentDate - targetDate) / 1000;

      const months = Math.floor(timeDifference / (30 * 24 * 60 * 60));
      const days = Math.floor((timeDifference % (30 * 24 * 60 * 60)) / (24 * 60 * 60));
      const hours = Math.floor((timeDifference % (24 * 60 * 60)) / (60 * 60));
      const seconds = Math.floor(timeDifference % 60);

      setTimeSince({ months, days, hours, seconds });
    };

    calculateTimeSince();

    const interval = setInterval(calculateTimeSince, 1000);

    return () => {
      clearInterval(intervalId);
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const imageTransition = () => {
      setImageFadeIn(false);
      setTimeout(() => {
        const nextImageIndex = (imageIndex + 1) % images.length;
        setImageIndex(nextImageIndex);
        setImageFadeIn(true);  
      }, 1000);
    };

    const imageTransitionInterval = setInterval(imageTransition, 5000);

    return () => {
      clearInterval(imageTransitionInterval);
    };
  }, [imageIndex, images.length]);

  useEffect(() => {
    if (showTime) {
      setTextVisible(true);
      setTimeout(() => setAdditionalDivVisible(true), 2000);
    }
  }, [showTime]);

  const calculateAge = () => {
    const birthDate = new Date('January 4, 2004');
    const currentDate = new Date();
  
    const lastBirthday = new Date(currentDate.getFullYear(), 0, 4);
    
    const daysSinceLastBirthday = (currentDate - lastBirthday)/(1000 * 60 * 60 * 24);
  
    return {
      years: currentDate.getFullYear() - birthDate.getFullYear(), 
      daysSinceLastBirthday
    };
  };

  const { years, daysSinceLastBirthday } = calculateAge();

  return (
    <div>
      <div className="main-body">
        <div className="image-container">
          <img
            key={imageIndex} 
            src={images[imageIndex]}
            alt="Tusi"
            className={`center-image ${imageFadeIn ? 'fade-in' : 'fade-out'}`}
          />
        </div>
        <h1>{typedText}</h1>
        {textVisible && (
          <>
            <h2 className={`fade-in ${textVisible ? 'fade-in' : 'fade-in'}`}>We've been together for</h2> 
            <h3 className={`fade-in ${textVisible ? 'fade-in' : 'fade-in'}`}>
              {timeSince.months} months, {timeSince.days} days, {timeSince.hours} hours, and {timeSince.seconds} seconds
            </h3>
          {additionalDivVisible && (

            <div
              className={`additional-div fades-in ${
                additionalDivVisible ? 'fade-in' : '' 
              }`} 
            >
              You are {(daysSinceLastBirthday/365 * 100).toFixed(5)}% to becoming {years + 1} years old!

              <div className="progress-bar-container">
                <div  
                  className="progress-bar"
                  style={{width: `${(daysSinceLastBirthday/365) * 100}%`}}   
                ></div>
              </div>
            </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Love;