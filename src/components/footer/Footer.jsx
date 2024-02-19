import React from "react";
import "./footer.css"
import {BsLinkedin} from "react-icons/bs"
import {FaGithubSquare} from "react-icons/fa"
import {BsInstagram} from "react-icons/bs"


const Footer = () => {
  return (
    <section id="footer">
      <ul className="line1">
        <li><a href="">Home</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Portfolio</a></li>
      </ul>
      <div className="Footer__Socials">
        <a href="https://www.linkedin.com/in/agrima-jain-/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/ughrima https://github.com" target="_blank"><FaGithubSquare/></a>
        <a href="https://instagram.com" target="_blank"><BsInstagram/></a>
      </div>

    </section>
  )
}

export default Footer
