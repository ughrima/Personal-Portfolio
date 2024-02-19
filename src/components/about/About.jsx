import React from 'react'
import './about.css'
import me from "../../assets/agrima.jpg"

import {FaGithubSquare} from "react-icons/fa"

const About = () => {
  return (
    <section id="about">

      <h1>Get to Know Me</h1>
      {/* <h2>About Me</h2> */}

      <div className="container about__Container">
        <div className='about__me'>
          <div className='about__me-image'>
          <img src={me} alt="" />
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <arcticle className='about__card'>
              <h5>School</h5>
              <small>DPS RKP, Delhi</small>
            </arcticle>
            <arcticle className='about__card'>
              {/* <BiSolidSchool className="about__icon"/> */}
              <h5>College</h5>
              <small>UPES, Uttarakhand</small>
            </arcticle>
          </div>
          <p>My career objective is to embrace a growth mindset, constantly seeking opportunities to learn from others and to tackle every task with utmost dedication. I am determined to enhance my technical knowledge and skills, propelling myself forward in the field. With a blend of strong leadership, and effective communication, I aspire to take on new challenges, leading the way towards success while making a meaningful contribution to the organization's growth. </p>

          <a href="#contact" className='btn'>Let's Connect </a>
        </div>    
      </div>
    </section>
  )
}

export default About


