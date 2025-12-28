import React from 'react'
import {BsLinkedin} from "react-icons/bs"
import {FaGithubSquare} from "react-icons/fa"

const HeaderSocials = () => {
  return (
      <div className="Header__Socials">
         <a href="https://www.linkedin.com/in/agrima-jain-/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><BsLinkedin/></a>
         <a href="https://github.com/ughrima" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithubSquare/></a>
      </div>
  )
}

export default HeaderSocials 
 