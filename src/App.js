import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('hero');

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'projects', 'journey', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: "Consolidation-Sim & CRD-RL-Control",
      category: "Research → Hardware",
      description: "Python package implementing soil consolidation models from academic research for reinforcement learning. Designed for hardware-in-the-loop validation of control strategies.",
      tech: ["Python", "OpenAI Gym", "Reinforcement Learning", "NumPy", "Physics Modeling"],
      highlights: [
        "Transformed academic papers into production RL environment",
        "Continuous control optimization for geotechnical systems",
        "Foundation for real hardware deployment (in progress)"
      ],
      status: "In Production + Hardware Validation",
      github: "https://github.com/Targhib49/consolidation-sim",
      tags: ["RL", "Control Systems", "Hardware"]
    },
    {
      title: "Kamil Pascasarjana Website",
      category: "Production Systems",
      description: "Full-stack Muslim postgraduate community hub with personalized dashboards, utility tools, mini-games, e-commerce, blogs, and news aggregation.",
      tech: ["React", "Node.js", "MongoDB", "Express", "Authentication"],
      highlights: [
        "Serving real users with diverse needs",
        "Complex user management and personalization",
        "Multiple integrated features in one platform"
      ],
      status: "Live with Active Users",
      link: "kamil-pascasarjana-websites.vercel.app",
      tags: ["Full-Stack", "User Experience", "Production"]
    },
    {
      title: "Control System Academy",
      category: "Educational Platform",
      description: "Interactive learning platform for control systems engineering with simulations, visualizations, and hands-on exercises.",
      tech: ["React", "D3.js", "Control Theory", "Interactive Simulations"],
      highlights: [
        "Makes complex theory accessible through interaction",
        "Real-time system simulation and visualization",
        "Progressive learning curriculum"
      ],
      status: "Active Development",
      link: "control-system-academy.vercel.app",
      tags: ["Education", "Visualization", "Controls"]
    },
    {
      title: "Paradox Cafe",
      category: "AI Systems",
      description: "AI gaming ecosystem featuring the Paradox Persona System - persistent AI characters with memory across interactions.",
      tech: ["LLM", "Vector DB", "React", "Memory Systems", "AI Agents"],
      highlights: [
        "Stateful AI personas with long-term memory",
        "Context-aware conversational agents",
        "Novel approach to AI interaction design"
      ],
      status: "Prototype",
      github: "https://github.com/Targhib49/Paradox-Cafe",
      tags: ["LLM", "AI Agents", "Gaming"]
    },
    {
      title: "Quadcopter DRL",
      category: "Robotics Research",
      description: "Deep reinforcement learning for quadcopter control and navigation using physics-based simulation.",
      tech: ["Python", "PyBullet", "DRL", "Control Theory", "Robotics"],
      highlights: [
        "Continuous control in 3D space",
        "Sim-to-real transfer considerations",
        "Comparing classical vs learned control"
      ],
      status: "Planned Continuation",
      github: "https://github.com/Targhib49/quadcopter-drl",
      tags: ["DRL", "Robotics", "Simulation"]
    }
  ];

  const skills = {
    "AI/ML": ["Reinforcement Learning", "Deep RL", "Control Optimization", "LLM Systems", "Physics-based ML"],
    "Engineering": ["Control Systems", "Full-Stack Development", "System Architecture", "Hardware Integration"],
    "Domains": ["Geotechnical", "Aerospace", "Robotics", "Educational Systems", "Web Services"]
  };

  const timeline = [
    { year: "Foundation", title: "Autonomous & Control Systems Engineering", desc: "Built foundation in control theory, system dynamics, and optimization" },
    { year: "Expansion", title: "Cross-Domain Applications", desc: "Applied control systems to geotechnical, aerospace, and robotics problems" },
    { year: "AI Integration", title: "Research → Code", desc: "Started implementing ML papers as production-ready packages" },
    { year: "Production", title: "Real Users & Systems", desc: "Deployed full-stack platforms serving actual user communities" },
    { year: "Current", title: "Hardware Validation", desc: "Bridging simulation to reality with hardware-in-the-loop systems" }
  ];

  return (
    <div className="App">
      {/* Navigation */}
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

      {/* Hero Section */}
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
            <div className="hero-tag">AI Engineer</div>
            <h1 className="hero-title">
              From Research Papers<br />
              <span className="gradient-text">to Real-World Systems</span>
            </h1>
            <p className="hero-subtitle">
              Building intelligent control systems from academic research to hardware deployment.
              <br />Specializing in reinforcement learning, physics-based ML, and production AI systems.
            </p>
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

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">What I Do</h2>
            <div className="about-grid">
              <div className="about-card">
                <div className="about-icon">🔬</div>
                <h3>Research Implementation</h3>
                <p>I bridge academia and industry by transforming research papers into production-ready code. Every implementation is designed with real-world deployment in mind.</p>
              </div>
              <div className="about-card">
                <div className="about-icon">🏗️</div>
                <h3>Full-Stack AI Systems</h3>
                <p>End-to-end development from model training to user-facing applications. I build complete systems, not just notebooks.</p>
              </div>
              <div className="about-card">
                <div className="about-icon">🤖</div>
                <h3>Hardware Integration</h3>
                <p>Specializing in control systems that work beyond simulation - validated on real hardware with physical constraints.</p>
              </div>
            </div>

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

            <div className="differentiator">
              <h3>The Differentiator</h3>
              <p>
                With a foundation in <strong>Autonomous & Control Systems Engineering</strong>, 
                I bring deep understanding of system dynamics and optimization to AI problems. 
                My cross-domain experience—from geotechnical to aerospace to web services—enables 
                rapid domain learning and translation of technical capabilities into user value.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Featured Work</h2>
            <p className="section-subtitle">
              Selected projects demonstrating the research → production → hardware pipeline
            </p>
            
            <div className="projects-grid">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  className="project-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="project-header">
                    <span className="project-category">{project.category}</span>
                    <span className="project-status">{project.status}</span>
                  </div>
                  
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-highlights">
                    {project.highlights.map(highlight => (
                      <div key={highlight} className="highlight-item">
                        <span className="highlight-bullet">→</span>
                        {highlight}
                      </div>
                    ))}
                  </div>

                  <div className="project-tech">
                    {project.tech.map(tech => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>

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

                  <div className="project-tags">
                    {project.tags.map(tag => (
                      <span key={tag} className="project-tag">#{tag}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Journey Section */}
      <section id="journey" className="journey">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">The Journey</h2>
            <p className="section-subtitle">
              Evolution from control systems engineering to AI-driven hardware systems
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

      {/* Contact Section */}
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
                  <li>✓ AI Engineer roles in robotics & physical systems</li>
                  <li>✓ Research-to-production implementations</li>
                  <li>✓ Consulting on ML + domain expertise projects</li>
                  <li>✓ Control systems optimization challenges</li>
                </ul>

                <div className="status-box">
                  <div className="status-indicator"></div>
                  <div>
                    <strong>Currently:</strong> Validating RL models on hardware systems
                    <br />
                    <strong>Open to:</strong> Part-time roles, projects, contract work, collaborations
                  </div>
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

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <p>© {new Date().getFullYear()} • Built with React & Framer Motion</p>
            <p className="footer-quote">
              <code>"From papers to production, simulation to silicon"</code>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;