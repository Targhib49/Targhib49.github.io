import React from 'react';
import { motion } from 'framer-motion';

const Navigation = ({ activeSection }) => {
  return (
    <nav className="nav">
      <div className="nav-content">
        <motion.div 
          className="nav-logo"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <code>&lt;AI_Engineer /&gt;</code>
        </motion.div>
        <div className="nav-links">
          {['about', 'projects', 'journey', 'contact'].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className={`nav-link ${activeSection === section ? 'active' : ''}`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;