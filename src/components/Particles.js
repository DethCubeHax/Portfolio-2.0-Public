const createParticles = (numParticles, canvas) => {
    const particles = [];
    const margin = 0.05 * canvas.width; // 5% margin from sides
  
    for (let i = 0; i < numParticles; i++) {
      let x = Math.random() * (canvas.width - margin * 2) + margin;
      let y = Math.random() * (canvas.height - margin * 2) + margin;
  
      // Adjust particles towards the center
      if (x > canvas.width / 2) {
        x += margin;
      } else {
        x -= margin;
      }
  
      if (y > canvas.height / 2) {
        y += margin;
      } else {
        y -= margin;
      }
  
      const particle = {
        x,
        y,
        radius: Math.random() * 2 + 1,
        color: 'white',
        velocity: {
          x: (Math.random() - 0.5) * 2,
          y: (Math.random() - 0.5) * 2
        },
        friction: 0.98 // Add friction value
      };
      particles.push(particle);
    }
    return particles;
  };
  
  const updateParticles = (particles, canvas, context, mouse) => {
    context.clearRect(0, 0, canvas.width, canvas.height);
  
    particles.forEach((particle) => {
      const dx = particle.x - mouse.x;
      const dy = particle.y - mouse.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
  
      if (distance < 100) {
        const forceX = dx / distance;
        const forceY = dy / distance;
        particle.velocity.x += forceX;
        particle.velocity.y += forceY;
      }
  
      particle.velocity.x *= particle.friction;
      particle.velocity.y *= particle.friction;
  
      const minVelocity = 0.2;
      if (Math.abs(particle.velocity.x) < minVelocity) {
        particle.velocity.x = particle.velocity.x < 0 ? -minVelocity : minVelocity;
      }
  
      if (Math.abs(particle.velocity.y) < minVelocity) {
        particle.velocity.y = particle.velocity.y < 0 ? -minVelocity : minVelocity;
      }
  
      particle.x += particle.velocity.x;
      particle.y += particle.velocity.y;
  
      if (particle.x + particle.radius > canvas.width || particle.x - particle.radius < 0) {
        particle.velocity.x *= -1;
      }
  
      if (particle.y + particle.radius > canvas.height || particle.y - particle.radius < 0) {
        particle.velocity.y *= -1;
      }
  
      context.fillStyle = particle.color;
      context.beginPath();
      context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      context.fill();
      context.closePath();
    });
  
    connectParticles(particles, context);
  };
  
  const connectParticles = (particles, context) => {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
  
        if (distance < 100) {
          context.strokeStyle = 'rgba(255, 255, 255, 0.2)';
          context.lineWidth = 1;
          context.beginPath();
          context.moveTo(particles[i].x, particles[i].y);
          context.lineTo(particles[j].x, particles[j].y);
          context.stroke();
          context.closePath();
        }
      }
    }
  };
  
  const initializeParticles = (canvasRef) => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const mouse = { x: 0, y: 0 };
  
    let particles = [];
  
    // If window width, create 80 particles, else create 200
    if (window.innerWidth < 600) {
      particles = createParticles(80, canvas);
    } else {
      particles = createParticles(200, canvas);
    }
  
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = createParticles(particles.length, canvas); // Re-create particles when canvas is resized
    };
  
    const updateMousePosition = (event) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };
  
    const updateCanvas = () => {
      updateParticles(particles, canvas, context, mouse);
      requestAnimationFrame(updateCanvas);
    };
  
    const initialize = () => {
      resizeCanvas();
      updateCanvas();
    };
  
    initialize();
  
    window.addEventListener('resize', resizeCanvas);
    canvas.addEventListener('mousemove', updateMousePosition);
  
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', updateMousePosition);
    };
  };
  
  export { initializeParticles };