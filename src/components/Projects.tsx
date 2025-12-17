import React from 'react';
import { FaGithub } from 'react-icons/fa';
import '../styles/components.css';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Project Alpha",
      description: "A full-stack application for managing workflows efficiently. Built with performance and scalability in mind.",
      tech: ["React", "Node.js", "PostgreSQL"],
      github: "https://github.com/tonyrav3n"
    },
    {
      title: "Project Beta",
      description: "Real-time data visualization dashboard. Features dark mode and responsive design.",
      tech: ["TypeScript", "D3.js", "Firebase"],
      github: "https://github.com/tonyrav3n"
    },
    {
      title: "Project Gamma",
      description: "Open source CLI tool for developer productivity. helping developers save time on repetitive tasks.",
      tech: ["Rust", "CLI", "Automation"],
      github: "https://github.com/tonyrav3n"
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="section-header">
        <span className="comment">//projects</span>
      </div>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.description}</p>
            <div className="project-tech">
              {project.tech.map(t => (
                <span key={t} className="tech-tag">#{t}</span>
              ))}
            </div>
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
              <FaGithub /> View Code
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
