import React from 'react';
import { motion } from 'framer-motion';
import { heroStats } from '../data/siteData';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-bg">
        <div className="grid-pattern"></div>
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
      </div>
      
      <div className="container hero-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="hero-tag">AI Engineer • Master's from ITB</div>
          
          <h1 className="hero-title">
            Translating AI Research<br />
            <span className="gradient-text">Into Production Systems</span>
          </h1>
          
          <p className="hero-subtitle">
            From mathematical foundations to deployment — implementing papers across NLP, 
            Computer Vision, Graph Neural Networks, Reinforcement Learning, and Control Theory
          </p>

          {/* Process Flow */}
          <div className="process-flow">
            <div className="process-step">
              <span className="process-icon">📄</span>
              <span className="process-label">Research Paper</span>
            </div>
            <span className="process-arrow">→</span>
            <div className="process-step">
              <span className="process-icon">🧮</span>
              <span className="process-label">Mathematical Implementation</span>
            </div>
            <span className="process-arrow">→</span>
            <div className="process-step">
              <span className="process-icon">💻</span>
              <span className="process-label">Production Code</span>
            </div>
            <span className="process-arrow">→</span>
            <div className="process-step">
              <span className="process-icon">🌐</span>
              <span className="process-label">Deployable Systems</span>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="hero-stats">
            {heroStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="stat-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-content">
                  <div className="stat-metric">{stat.metric}</div>
                  <div className="stat-label">{stat.label}</div>
                  <div className="stat-context">{stat.context}</div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="#contact" className="btn btn-secondary">Get in Touch</a>
          </div>
        </motion.div>
      </div>
      
      <div className="scroll-indicator">
        <div className="scroll-line"></div>
        <span>Scroll to explore</span>
      </div>
    </section>
  );
};

export default Hero;