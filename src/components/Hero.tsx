import React from 'react';
import '../styles/components.css';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="avatar-container">
        <img 
          src="/placeholder-avatar.svg" 
          alt="Profile Avatar" 
          className="avatar" 
        />
      </div>
      <div className="hero-content">
        <h1>
          <span className="bracket">&lt;</span>
          Tony Raven
          <span className="bracket">&gt;</span>
        </h1>
        <p className="role comment">// Fullstack Developer</p>
      </div>
    </section>
  );
};

export default Hero;
