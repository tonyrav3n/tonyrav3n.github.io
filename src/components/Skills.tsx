import React from 'react';
import '../styles/components.css';

const Skills: React.FC = () => {
  const skills = {
    frontend: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'],
    backend: ['Node.js', 'Python', 'PostgreSQL', 'Go'],
    tools: ['Git', 'Docker', 'Linux', 'Vite']
  };

  return (
    <section id="skills" className="section">
      <div className="section-header">
        <span className="comment">// Skills</span>
      </div>
      <div className="skills-grid">
        <div className="skill-category">
          <h3>Frontend</h3>
          <div className="skill-list">
            {skills.frontend.map(skill => (
              <span key={skill} className="skill-pill">{skill}</span>
            ))}
          </div>
        </div>

        <div className="skill-category">
          <h3>Backend</h3>
          <div className="skill-list">
            {skills.backend.map(skill => (
              <span key={skill} className="skill-pill">{skill}</span>
            ))}
          </div>
        </div>

        <div className="skill-category">
          <h3>Tools</h3>
          <div className="skill-list">
            {skills.tools.map(skill => (
              <span key={skill} className="skill-pill">{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
