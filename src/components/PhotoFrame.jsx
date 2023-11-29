import React, { useEffect, useRef } from 'react';

const PhotoFrame = ({ image }) => {
  const imageRef = useRef(null);
  const lineRef = useRef(null);
  const didAnimateRef = useRef(false); // New ref

  useEffect(() => {
    const image = imageRef.current;
    const line = lineRef.current;

    // Initial state
    line.style.height = '100%';

    // Animation
    const animateFrame = () => {
      if (didAnimateRef.current) return; // If animation has occurred, do nothing
      line.style.display = 'block';
      let height = 100;
      const frameAnimation = setInterval(() => {
        height -= 10;
        line.style.height = height + '%';
        if (height <= 0) {
          clearInterval(frameAnimation);
          image.style.opacity = '1';
          didAnimateRef.current = true; // Set animation to occurred
        }
      }, 50);
    };

    animateFrame(); // Directly call the animation function
  }, [image]); // Remove didAnimate from dependency array

  return (
    <div className="PhotoFrame">
      <div className="PhotoFrameWrapper">
        <img src={image} alt="Image" className="PhotoFrameImage" ref={imageRef} />
      </div>
      <div className="PhotoFrameLine" ref={lineRef}></div>
    </div>
  );
};

export default PhotoFrame;