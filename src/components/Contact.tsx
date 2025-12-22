import React from "react";
import { FaDiscord, FaEnvelope, FaGithub } from "react-icons/fa";
import "../styles/components.css";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section">
      <div className="section-header">
        <span className="comment">// Contact</span>
      </div>
      <div className="contact-links">
        <p style={{ marginBottom: "1rem", maxWidth: "500px" }}>
          Interested in building something together? Let's talk.
        </p>

        <a href="mailto:tonyraven.dev@gmail.com" className="contact-item">
          <FaEnvelope /> tonyraven.dev@gmail.com
        </a>
        <a
          href="https://github.com/tonyrav3n"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-item"
        >
          <FaGithub /> github.com/tonyrav3n
        </a>
        <a
          href="https://discord.com/users/643962985089335296"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-item"
        >
          <FaDiscord /> tonyrav3n
        </a>
      </div>
    </section>
  );
};

export default Contact;
