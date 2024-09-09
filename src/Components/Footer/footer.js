import React from 'react';
import { NavLink } from 'react-router-dom';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer ">
      <div className="footer-content">
        <ul className="footer-links">
          <li><NavLink to="/">FAQ</NavLink></li>
          <li><NavLink to="/">Help Center</NavLink></li>
          <li><NavLink to="/">Account</NavLink></li>
          <li><NavLink to="/">Media Center</NavLink></li>
          <li><NavLink to="/">Investor Relations</NavLink></li>
          <li><NavLink to="/">Jobs</NavLink></li>
          <li><NavLink to="/">Terms of Use</NavLink></li>
          <li><NavLink to="/">Privacy</NavLink></li>
          <li><NavLink to="/">Legal Notices</NavLink></li>
        </ul>
        <div className="footer-copyright">
          &copy; 2024 Netflix Clone | Built for educational purposes
        </div>
      </div>
    </footer>
  );
};

export default Footer;
