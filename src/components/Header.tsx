import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
import '../styles/components.css';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="header">
      <nav className="nav">
        <a href="#" className="nav-link">
          <span className="comment">//portfolio</span>
        </a>
        <div className="nav-group">
          <a href="#about" className="nav-link">
            <span className="comment">//about</span>
          </a>
          <a href="#skills" className="nav-link">
            <span className="comment">//skills</span>
          </a>
          <a href="#projects" className="nav-link">
            <span className="comment">//projects</span>
          </a>
          <a href="#contact" className="nav-link">
            <span className="comment">//contact</span>
          </a>
        </div>
      </nav>
      
      <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle theme">
        {theme === 'dark' ? <FaSun /> : <FaMoon />}
      </button>
    </header>
  );
};

export default Header;
