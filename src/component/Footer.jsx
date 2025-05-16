import React from "react";
// import LinkedinIcon from "./asset"; // Adjust path if needed
import LinkedinIcon from '../assets/images/LinkedinIcon.png'
// import githubIcon from "./assets/github.png"; // Optional
import TwitterIcon from '../assets/images/twitter.png';
// import "./Footer.css"; // Optional external CSS

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; {new Date().getFullYear()} Vivek Kumar Barnwal. All rights reserved.</p>
        <div className="footer-icons">
          <a
            href="https://www.linkedin.com/in/vivek-barnwal-v2001"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <img src={LinkedinIcon} alt="LinkedIn" />
          </a>
          <a
            href="https://github.com/vivekbarnwal19"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <img src={TwitterIcon} alt="GitHub" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
