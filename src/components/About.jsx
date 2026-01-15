import React from 'react';
import { motion } from 'framer-motion';
import { skills, aboutCards } from '../data/siteData';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">What I Do</h2>
          
          {/* About Cards */}
          <div className="about-grid">
            {aboutCards.map((card, index) => (
              <motion.div
                key={card.title}
                className="about-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="about-icon">{card.icon}</div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Skills Section */}
          <div className="skills-section">
            <h3 className="skills-title">Technical Arsenal</h3>
            <div className="skills-grid">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category} className="skill-category">
                  <h4>{category}</h4>
                  <div className="skill-tags">
                    {items.map(skill => (
                      <span key={skill} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Differentiator */}
          <div className="differentiator">
            <h3>The Differentiator</h3>
            <p>
              With a <strong>Master's in Electrical Engineering from ITB</strong> (Control, Robotics & Autonomous Systems), 
              I bring deep mathematical foundations to AI implementation. My rare combination of skills — mathematical depth 
              across AI domains (NLP, CV, GNN, RL), rigorous implementation practices, full-stack development, and hardware 
              integration capabilities — enables me to translate research papers into production-ready systems that actually work.
            </p>
            <p className="differentiator-highlight">
              <strong>Research rigor meets production engineering.</strong> I don't just follow tutorials — 
              I implement papers from first principles and deploy them as complete systems.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;