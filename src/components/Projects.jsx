import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { projects, comingSoonProjects } from '../data/projectsData';

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Featured Work</h2>
          <p className="section-subtitle">
            Selected projects demonstrating mathematical AI implementations from research to production
          </p>
          
          {/* Main Projects */}
          <div className="projects-grid">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>

          {/* Coming Soon Projects */}
          {comingSoonProjects.length > 0 && (
            <>
              <h3 className="subsection-title">Coming Soon</h3>
              <p className="subsection-subtitle">
                Planned projects expanding control theory and energy systems implementations
              </p>
              <div className="projects-grid">
                {comingSoonProjects.map((project, index) => (
                  <ProjectCard 
                    key={project.title} 
                    project={project} 
                    index={projects.length + index} 
                  />
                ))}
              </div>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;