import React from 'react';
import { motion } from 'framer-motion';
import { timeline } from '../data/siteData';

const Journey = () => {
  return (
    <section id="journey" className="journey">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">The Journey</h2>
          <p className="section-subtitle">
            Evolution from control systems engineering to mathematical AI implementations
          </p>
          
          <div className="timeline">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                className="timeline-item"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <span className="timeline-year">{item.year}</span>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Journey;