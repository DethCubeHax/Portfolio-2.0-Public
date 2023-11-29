const typewriter = (textElement, text, delay = 100, startDelay = 0) => {
    let currentIndex = 0;
    let startTime = null;
    let typingStarted = false;
  
    const typeNextCharacter = (timestamp) => {
      if (!startTime) {
        startTime = timestamp;
      }
  
      const elapsed = timestamp - startTime;
  
      if (elapsed >= startDelay * 1000 && !typingStarted) {
        typingStarted = true;
      }
  
      if (typingStarted) {
        const charactersToShow = Math.floor((elapsed - startDelay * 1000) / delay);
  
        if (charactersToShow <= currentIndex) {
          requestAnimationFrame(typeNextCharacter);
          return;
        }
  
        textElement.textContent = text.slice(0, charactersToShow);
        currentIndex = charactersToShow;
  
        if (currentIndex < text.length) {
          requestAnimationFrame(typeNextCharacter);
        }
      } else {
        requestAnimationFrame(typeNextCharacter);
      }
    };
  
    requestAnimationFrame(typeNextCharacter);
  };
  
  export default typewriter;