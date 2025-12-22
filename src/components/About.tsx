import React from "react";
import "../styles/components.css";

const About: React.FC = () => {
  return (
    <section id="about" className="section">
      <div className="section-header">
        <span className="comment">// About</span>
      </div>
      <p style={{ lineHeight: "1.6", maxWidth: "600px" }}>
        I'm a Fullstack Developer bridging the gap between complex smart
        contracts and intuitive user interfaces. Specialising in{" "}
        <b>Next.js</b> and <b>Solidity</b>, I build DApps that feel as smooth
        as traditional web apps.
        <br /><br />
        Whether it's crafting high-performance frontends or automating community
        logic with Discord bots, I focus on shipping products that work.
      </p>
    </section>
  );
};

export default About;
