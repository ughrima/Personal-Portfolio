import React from "react";
import "./footer.css"
import {BsLinkedin} from "react-icons/bs"
import {FaGithubSquare} from "react-icons/fa"

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact">
      <div className="container footer__container">
        <div className="footer__content">
          <h3>Agrima Jain</h3>
          <p>AI & Tech Developer | Software Engineer | ML Researcher</p>
        </div>
        
        <ul className="footer__links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#achievements">Achievements</a></li>
        </ul>

        <div className="footer__socials">
          <a href="https://www.linkedin.com/in/agrima-jain-/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <BsLinkedin/>
          </a>
          <a href="https://github.com/ughrima" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithubSquare/>
          </a>
        </div>

        <div className="footer__copyright">
          <small>&copy; {currentYear} Agrima Jain. All rights reserved.</small>
        </div>
      </div>
    </footer>
  )
}

export default Footer
