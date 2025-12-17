import React, { useState, useEffect } from 'react';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
import '../styles/components.css';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [time, setTime] = useState<string>('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      {/* Desktop Layout: Info Bar (Left) + Theme Toggle (Right) */}
      <div className="header-content desktop-only">
        <div className="header-info-bar">
          <div className="info-group">
            <span className="comment">//portfolio</span>
            <span className="info-value">tonyraven.dev</span>
          </div>
          
          <div className="separator"></div>

          <div className="info-group">
            <span className="comment">//contact</span>
            <a href="mailto:hello@example.com" className="info-value hover-link">hello@example.com</a>
          </div>

          <div className="separator"></div>

          <div className="info-group">
            <span className="comment">//github</span>
            <a href="https://github.com/tonyrav3n" target="_blank" rel="noopener noreferrer" className="info-value hover-link">
              github.com/tonyrav3n
            </a>
          </div>

          <div className="separator"></div>

          <div className="info-group">
            <span className="comment">//location</span>
            <span className="info-value">Earth, {time}</span>
          </div>
        </div>

        <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle theme">
          {theme === 'dark' ? <FaSun /> : <FaMoon />}
        </button>
      </div>

      {/* Mobile Layout: Controls (Right) + Dropdown Menu */}
      <div className="mobile-only">
        <div className="mobile-controls">
          <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle theme">
            {theme === 'dark' ? <FaSun /> : <FaMoon />}
          </button>
          <button onClick={toggleMenu} className="hamburger-btn" aria-label="Toggle menu">
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
          <div className="info-group">
            <span className="comment">//portfolio</span>
            <span className="info-value">tonyraven.dev</span>
          </div>
          
          <div className="info-group">
            <span className="comment">//contact</span>
            <a href="mailto:hello@example.com" className="info-value hover-link">hello@example.com</a>
          </div>

          <div className="info-group">
            <span className="comment">//github</span>
            <a href="https://github.com/tonyrav3n" target="_blank" rel="noopener noreferrer" className="info-value hover-link">
              github.com/tonyrav3n
            </a>
          </div>

          <div className="info-group">
            <span className="comment">//location</span>
            <span className="info-value">Earth, {time}</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
