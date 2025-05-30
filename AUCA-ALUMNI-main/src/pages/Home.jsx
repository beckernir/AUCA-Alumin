import React, { useEffect } from 'react';
import '../styles/Home.css';

const Home = () => {
  useEffect(() => {
    const canvas = document.getElementById('fireworks');
    const ctx = canvas.getContext('2d');

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const fireworks = [];

    class Particle {
      constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 4 - 2;
        this.speedY = Math.random() * 4 - 2;
        this.color = color;
        this.life = 100;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.life--;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    class Firework {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = canvas.height;
        this.targetY = Math.random() * canvas.height * 0.5;
        this.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
        this.exploded = false;
        this.particles = [];
      }

      update() {
        if (!this.exploded) {
          this.y -= 4;
          if (this.y <= this.targetY) {
            this.exploded = true;
            for (let i = 0; i < 30; i++) {
              this.particles.push(new Particle(this.x, this.y, this.color));
            }
          }
        } else {
          this.particles.forEach((p) => p.update());
        }
      }

      draw() {
        if (!this.exploded) {
          ctx.beginPath();
          ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
          ctx.fillStyle = this.color;
          ctx.fill();
        } else {
          this.particles.forEach((p) => p.draw());
        }
      }

      isDead() {
        return this.exploded && this.particles.every((p) => p.life <= 0);
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (Math.random() < 0.05) {
        fireworks.push(new Firework());
      }
      fireworks.forEach((fw) => {
        fw.update();
        fw.draw();
      });
      for (let i = fireworks.length - 1; i >= 0; i--) {
        if (fireworks[i].isDead()) {
          fireworks.splice(i, 1);
        }
      }
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div className="home-container">
      <canvas id="fireworks" className="fireworks-canvas"></canvas>
      <div className="overlay">
        <div className="home-content">
          <h1>Congratulations you are whole graduate now!</h1>
          <p>Welcome to AUCA ALUMNI-PLATFORM.</p>
          <button className="home-btn">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
