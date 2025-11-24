/*
 * JavaScript to power the interactive elements on Mohith Kasula's portfolio.
 * This script handles the animated particle network on the hero section
 * and animates skill progress bars when they enter the viewport.
 */

document.addEventListener('DOMContentLoaded', () => {
  initNetworkCanvas();
  initSkillAnimation();
});

/**
 * Creates an animated network of particles behind the hero text. Particles move
 * randomly and connect with lines when within a certain distance. The effect
 * is inspired by neural networks and healthcare data connectivity.
 */
function initNetworkCanvas() {
  const canvas = document.getElementById('network-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let width, height;
  const particles = [];
  const NUM_PARTICLES = 70;
  const MAX_DISTANCE = 120;

  // Resize canvas to full hero dimensions
  function resize() {
    width = canvas.width = window.innerWidth;
    // Height equals the hero section height to avoid scrolling issues
    const hero = document.getElementById('hero');
    height = canvas.height = hero ? hero.offsetHeight : window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  // Particle constructor
  function Particle() {
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    const angle = Math.random() * Math.PI * 2;
    const speed = 0.5 + Math.random() * 0.7;
    this.vx = Math.cos(angle) * speed;
    this.vy = Math.sin(angle) * speed;
    this.radius = 2 + Math.random() * 2;
  }

  // Create initial particles
  for (let i = 0; i < NUM_PARTICLES; i++) {
    particles.push(new Particle());
  }

  // Update particle positions and draw network
  function update() {
    ctx.clearRect(0, 0, width, height);

    // Draw connections first to avoid overlaying on top of particles
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const p1 = particles[i];
        const p2 = particles[j];
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        const dist = Math.hypot(dx, dy);
        if (dist < MAX_DISTANCE) {
          const alpha = 1 - dist / MAX_DISTANCE;
          ctx.strokeStyle = `rgba(0, 168, 232, ${alpha * 0.5})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        }
      }
    }

    // Draw particles and update positions
    for (const p of particles) {
      ctx.fillStyle = '#00a8e8';
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fill();
      p.x += p.vx;
      p.y += p.vy;
      // Bounce off edges
      if (p.x < 0 || p.x > width) p.vx *= -1;
      if (p.y < 0 || p.y > height) p.vy *= -1;
    }
    requestAnimationFrame(update);
  }
  update();
}

/**
 * Animates skill bars when they enter the viewport using an IntersectionObserver.
 * Each progress bar has a data-value attribute that determines its final width.
 */
function initSkillAnimation() {
  const progressBars = document.querySelectorAll('.progress');
  if (progressBars.length === 0) return;
  const options = {
    threshold: 0.4
  };
  const animateBars = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        progressBars.forEach(bar => {
          const val = bar.getAttribute('data-value');
          bar.style.setProperty('--progress', val + '%');
        });
        // Only animate once
        observer.unobserve(entry.target);
      }
    });
  };
  const observer = new IntersectionObserver(animateBars, options);
  const skillsSection = document.getElementById('skills');
  if (skillsSection) observer.observe(skillsSection);
}