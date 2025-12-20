import React, { useState, useEffect } from 'react';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
import '../styles/components.css';

interface NavItem {
  label: string;
  text: string;
  href?: string;
  isExternal?: boolean;
}

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

  const navItems: NavItem[] = [
    { label: '// Portfolio', text: 'tonyraven.dev' },
    { label: '// Contact', text: 'tonyraven.dev@gmail.com', href: 'mailto:tonyraven.dev@gmail.com' },
    { label: '// Github', text: 'github.com/tonyrav3n', href: 'https://github.com/tonyrav3n', isExternal: true },
    { label: '// Location', text: `Earth, ${time}` }
  ];

  return (
    <header className="header">
      {/* Desktop Layout: Info Bar (Left) + Theme Toggle (Right) */}
      <div className="header-content desktop-only">
        <div className="header-info-bar">
          {navItems.map((item, index) => (
            <React.Fragment key={index}>
              <div className="info-group">
                <span className="comment">{item.label}</span>
                {item.href ? (
                  <a
                    href={item.href}
                    className="info-value hover-link"
                    {...(item.isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    {item.text}
                  </a>
                ) : (
                  <span className="info-value">{item.text}</span>
                )}
              </div>
              {index < navItems.length - 1 && <div className="separator"></div>}
            </React.Fragment>
          ))}
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
          {navItems.map((item, index) => (
            <div className="info-group" key={index}>
              <span className="comment">{item.label}</span>
              {item.href ? (
                <a
                  href={item.href}
                  className="info-value hover-link"
                  {...(item.isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  {item.text}
                </a>
              ) : (
                <span className="info-value">{item.text}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
