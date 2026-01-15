import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p>© {new Date().getFullYear()} Targhib Ibrahim • Built with React & Framer Motion</p>
          <p className="footer-quote">
            <code>"From research papers to production systems — mathematical foundations to deployment"</code>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;