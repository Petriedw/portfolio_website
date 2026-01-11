// src/components/Hero.jsx
import { useEffect, useRef } from "react";
import profile from "../assets/petrie.jpeg";

export default function Hero() {
  const photoRef = useRef(null);

  useEffect(() => {
    const photo = photoRef.current;
    if (!photo) return;

    const handleMouseMove = (e) => {
      const rect = photo.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      const rotateX = (y / rect.height) * -15; // Max 15deg tilt up/down
      const rotateY = (x / rect.width) * 15;   // Max 15deg tilt left/right
      
      photo.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    };

    const handleMouseLeave = () => {
      photo.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
    };

    photo.addEventListener('mousemove', handleMouseMove);
    photo.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      photo.removeEventListener('mousemove', handleMouseMove);
      photo.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section id="top" className="hero">
      <div className="hero__inner">
        <div className="hero__left">
          <h1 className="hero__name">PETRIE DE&nbsp;WIT</h1>
          <div className="hero__subtitle">Software Developer</div>

          <div className="hero__stats" role="group" aria-label="Key stats">
            <div className="hero__stat">
              <div className="hero__stat-num">3+</div>
              <div className="hero__stat-label">Experiences</div>
            </div>
            <div className="hero__divider" />
            <div className="hero__stat">
              <div className="hero__stat-num">4+</div>
              <div className="hero__stat-label">Projects</div>
            </div>
            <div className="hero__divider" />
            <div className="hero__stat">
              <div className="hero__stat-num">∞</div>
              <div className="hero__stat-label">Curiosity</div>
            </div>
          </div>

          <p className="hero__bio">
            Hi, I'm Petrie. I'm a software developer who thrives on problem-solving and high-pressure environments. 
            I see myself as a bridge between people and technology - translating ideas into clean, efficient code that makes a real impact.
          </p>

          <div className="hero__dots">
            <a className="social" href="https://www.linkedin.com/in/petrie-de-wit-491673267/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5 2.5 2.5 0 0 1 4.98 3.5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-.95 1.82-1.95 3.74-1.95C20 8.75 21 10.6 21 13.4V21h-4v-6.6c0-1.57-.56-2.64-1.97-2.64-1.07 0-1.71.72-1.99 1.42-.1.24-.13.57-.13.9V21h-4z"/></svg>
            </a>
            <a className="social" href="https://github.com/Petriedw" target="_blank" rel="noreferrer" aria-label="GitHub">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.36 6.84 9.72.5.09.68-.22.68-.49 0-.24-.01-.88-.01-1.73-2.78.62-3.37-1.36-3.37-1.36-.46-1.2-1.12-1.52-1.12-1.52-.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.9 1.57 2.36 1.12 2.93.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.15-4.56-5.12 0-1.13.39-2.05 1.03-2.77-.1-.26-.45-1.31.1-2.73 0 0 .84-.27 2.75 1.06A9.3 9.3 0 0 1 12 7.49c.85 0 1.71.12 2.51.34 1.9-1.34 2.74-1.06 2.74-1.06.56 1.42.2 2.47.1 2.73.64.72 1.03 1.64 1.03 2.77 0 3.98-2.34 4.86-4.57 5.12.36.31.68.92.68 1.86 0 1.34-.01 2.42-.01 2.75.01.27.19.59.7.49A10.02 10.02 0 0 0 22 12.26C22 6.58 17.52 2 12 2z"/></svg>
            </a>
            <a 
              className="social" 
              href="/cv.pdf" 
              download="Petrie-De-Wit-CV.pdf" 
              aria-label="Download CV"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <path d="M14 2v6h6M8 13h8M8 17h8M8 9h4" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="1.5"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="hero__right">
          <div ref={photoRef} className="photo-stack" aria-label="Portrait">
            <img className="photo-stack__img" src={profile} alt="Petrie De Wit portrait" />
          </div>
        </div>
      </div>
    </section>
  );
}