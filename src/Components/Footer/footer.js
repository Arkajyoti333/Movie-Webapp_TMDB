import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <ul className="footer-links">
          <li><a href="/">FAQ</a></li>
          <li><a href="/">Help Center</a></li>
          <li><a href="/">Account</a></li>
          <li><a href="/">Media Center</a></li>
          <li><a href="/">Investor Relations</a></li>
          <li><a href="/">Jobs</a></li>
          <li><a href="/">Terms of Use</a></li>
          <li><a href="/">Privacy</a></li>
          <li><a href="/">Legal Notices</a></li>
        </ul>
        <div className="footer-copyright">
          &copy; 2024 Netflix Clone | Built for educational purposes
        </div>
      </div>
    </footer>
  );
};

export default Footer;
