import React from "react";
import { FaGithub } from "react-icons/fa";
import "../styles/components.css";

const Projects: React.FC = () => {
  const projects = [
    {
      title: "amis. Bot",
      description:
        "A decentralized escrow service integrated directly into Discord. It combines smart contracts with a Discord bot to facilitate secure, trust-minimised p2p trades within communities.",
      tech: ["Solidity", "Discord.js", "Node.js", "Hardhat"],
      github: "https://github.com/tonyrav3n/amis-bot-live",
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="section-header">
        <span className="comment">// Projects</span>
      </div>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.description}</p>
            <div className="project-tech">
              {project.tech.map((t) => (
                <span key={t} className="tech-tag">
                  #{t}
                </span>
              ))}
            </div>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              <FaGithub /> View Code
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
