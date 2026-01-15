import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ project, index }) => {
  const [showMath, setShowMath] = useState(false);

  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <div className="project-header">
        <span className="project-category">{project.category}</span>
        <span className={`project-status ${project.status.includes('Coming Soon') ? 'coming-soon' : ''}`}>
          {project.status}
        </span>
      </div>
      
      <h3 className="project-title">{project.title}</h3>
      <p className="project-description">{project.description}</p>
      
      {/* Highlights */}
      <div className="project-highlights">
        {project.highlights?.map((highlight, i) => (
          <div key={i} className="highlight-item">
            <span className="highlight-bullet">→</span>
            {highlight}
          </div>
        ))}
        {project.plannedImplementations?.map((item, i) => (
          <div key={i} className="highlight-item">
            <span className="highlight-bullet">→</span>
            {item}
          </div>
        ))}
      </div>

      {/* Mathematical Foundation (collapsible) */}
      {(project.mathematicalFoundation || project.mathematicalFocus) && (
        <div className="math-section">
          <button 
            className="math-toggle"
            onClick={() => setShowMath(!showMath)}
          >
            <span>Mathematical Foundation</span>
            <span className={`toggle-icon ${showMath ? 'open' : ''}`}>▼</span>
          </button>
          
          {showMath && (
            <motion.div
              className="math-details"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
            >
              {(project.mathematicalFoundation || project.mathematicalFocus).map((item, i) => (
                <div key={i} className="math-item">
                  <span className="math-bullet">•</span>
                  {item}
                </div>
              ))}
            </motion.div>
          )}
        </div>
      )}

      {/* Tech Stack */}
      <div className="project-tech">
        {project.tech.map(tech => (
          <span key={tech} className="tech-tag">{tech}</span>
        ))}
      </div>

      {/* Links */}
      {(project.github || project.link) && (
        <div className="project-links">
          {project.github && (
            <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
              <span>GitHub</span> →
            </a>
          )}
          {project.link && (
            <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
              <span>Live Demo</span> →
            </a>
          )}
        </div>
      )}

      {/* Tags */}
      <div className="project-tags">
        {project.tags.map(tag => (
          <span key={tag} className="project-tag">#{tag}</span>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectCard;