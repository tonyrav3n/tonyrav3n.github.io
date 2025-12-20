import React from 'react';
import { FaEnvelope, FaGithub } from 'react-icons/fa';
import '../styles/components.css';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section">
      <div className="section-header">
        <span className="comment">// Contact</span>
      </div>
      <div className="contact-links">
        <p style={{ marginBottom: '1rem', maxWidth: '500px' }}>
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi,
          I'll try my best to get back to you!
        </p>

        <a href="mailto:tonyraven.dev@gmail.com" className="contact-item">
          <FaEnvelope /> tonyraven.dev@gmail.com
        </a>
        <a href="https://github.com/tonyrav3n" target="_blank" rel="noopener noreferrer" className="contact-item">
          <FaGithub /> github.com/tonyrav3n
        </a>
      </div>
    </section>
  );
};

export default Contact;
