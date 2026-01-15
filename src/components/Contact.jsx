import React from 'react';
import { motion } from 'framer-motion';
import { interests } from '../data/siteData';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="contact-content"
        >
          <h2 className="section-title">Let's Build Something</h2>
          
          <div className="contact-grid">
            <div className="contact-info">
              <h3>Interested In</h3>
              <ul className="interest-list">
                {interests.map((interest, index) => (
                  <li key={index}>✓ {interest}</li>
                ))}
              </ul>

              <div className="status-box">
                <div className="status-indicator"></div>
                <div>
                  <strong>Currently:</strong> AI paper implementations dashboard + surgical robot RL research
                  <br />
                  <strong>Open to:</strong> Full-time roles, freelance projects, research collaborations
                  <br />
                  <strong>Location:</strong> Bandung, Indonesia (open to remote work)
                </div>
              </div>

              <div className="contact-tagline">
                <p>
                  <strong>"If you need someone who understands the math behind AI and can implement it in production — let's talk."</strong>
                </p>
              </div>
            </div>

            <div className="contact-links">
              <h3>Connect</h3>
              <a href="https://github.com/Targhib49" className="contact-link" target="_blank" rel="noopener noreferrer">
                <span>GitHub</span>
                <span className="arrow">→</span>
              </a>
              <a href="https://www.linkedin.com/in/targhib-ibrahim/" className="contact-link" target="_blank" rel="noopener noreferrer">
                <span>LinkedIn</span>
                <span className="arrow">→</span>
              </a>
              <a href="mailto:targhib.ibrahim49@gmail.com" className="contact-link">
                <span>Email</span>
                <span className="arrow">→</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;