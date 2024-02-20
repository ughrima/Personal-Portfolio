import React from "react";
import "./footer.css"
import {BsLinkedin} from "react-icons/bs"
import {FaGithubSquare} from "react-icons/fa"
import {BsInstagram} from "react-icons/bs"


const Footer = () => {
  return (
    <section id="footer">
      <ul className="line1">
        <li>Home</li>
        <li>About</li>
        <li>Portfolio</li>
      </ul>
      <div className="Footer__Socials">
       <BsLinkedin/>
        <FaGithubSquare/>
        <BsInstagram/>
      </div>

    </section>
  )
}

export default Footer
