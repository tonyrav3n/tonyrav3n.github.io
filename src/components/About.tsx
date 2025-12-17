import React from 'react';
import '../styles/components.css';

const About: React.FC = () => {
  return (
    <section id="about" className="section">
      <div className="section-header">
        <span className="comment">//about</span>
      </div>
      <p style={{ lineHeight: '1.6', maxWidth: '600px' }}>
        Hi, I'm Tony. I enjoy building dynamic, creative products from start to finish. 
        Focused on developing intuitive experiences that constantly grow and improve based on user metrics.
        <br /><br />
        Currently exploring new technologies and building cool stuff on the web.
      </p>
    </section>
  );
};

export default About;
