import React from "react";
import "./portfolio.css"
import personal from "../../assets/personal.png"
import travel from "../../assets/travel websit.png"
import facereg from "../../assets/face-reg.png"
import opencert from "../../assets/open-cert.png"
import openweb from "../../assets/open-website.png"
// import alzzuport from "../../assets/bg-texture-white.png"
import weather from "../../assets/weather.png"
import gdsc from "../../assets/gdsc.png"
import Button from 'react-bootstrap/Button';


const Portfolio = () => {
  return (
    <section id="Portfolio">
      
      <h1>My Projects</h1>
      <h2>Have a look at my work!</h2>
      <br></br>
      <h2>Web Devlopment</h2>
      <br></br>

      <div className="container portfolio_container">

                
      {/* <article className="portfolio__item">
          <div className="portfolio__item-image"></div>
          <img src={gdsc} alt="" />
          <h4>Alzupport</h4>
          <p>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum </p>
          <Button variant="danger">Html</Button>{' '}
          <Button variant="success">NodeJS</Button>{' '}
          <Button variant="success">MongoDB</Button>{' '}
          <Button variant="warning">JavaScript</Button>{' '}
          <Button variant="info">Tailwind</Button>{' '}
        </article> */}

        <article className="portfolio__item">
          <div className="portfolio__item-image"></div>
          <img src={gdsc} alt="" />
          <h4>GDSC UPES </h4>
          <p>Created the official website for GDSC UPES.</p>
          <Button variant="danger">ReactJS</Button>{' '}
          <Button variant="info">Tailwind</Button>{' '}
          <Button variant="warning">JavaScript</Button>{' '}

          {/* <a href="https://github.com/ughrima/AJ-SPACE" className="btn">Code</a>
          <a href="https://personal-portfolio-agrima.netlify.app/" classname="btn">Live Demo</a> */}
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image"></div>
          <img src={personal} alt="" />
          <h4>Personal Portfolio</h4>
          <p>My portfolio website showcasing my skills and achievements in a visually captivating manner</p>
          <Button variant="danger">Html</Button>{' '}
          <Button variant="danger">CSS</Button>{' '}
          {/* <a href="https://github.com/ughrima/AJ-SPACE" className="btn">Code</a>
          <a href="https://personal-portfolio-agrima.netlify.app/" classname="btn">Live Demo</a> */}
        </article>
        
        <article className="portfolio__item">
          <div className="portfolio__item-image"></div>
          <img src={travel} alt="" />
          <h4>Travel Website</h4>
          <p>A travel website that shows different places, video about travel and information about travel. </p>
          <Button variant="danger">Html</Button>{' '}
          <Button variant="danger">CSS</Button>{' '}
          <Button variant="warning">JavaScript</Button>{' '}
          {/* <a href="https://github.com/ughrima/Travel-Website" className="btn">Code</a> */}
        </article>

        </div>
<br></br>
<br></br>
<br></br>
<h2>Other Areas</h2>
        <div className="container portfolio_container">
  

        <article className="portfolio__item">
          <div className="portfolio__item-image"></div>
          <img src={facereg} alt="" />
         <h4>Face Recognition</h4>
          <p>This is aimed at capturing and recognising user's face and diplaying their name. </p>
          <Button variant="danger">Python</Button>{' '}
          <Button variant="success">OpenCV</Button>{' '}
          <Button variant="success">Tesseract</Button>{' '}
        </article>  

        <article className="portfolio__item">
          <div className="portfolio__item-image"></div>
          <img src={weather} alt="" />
          <h4>Weather Prediction </h4>
          <p>A webapp that gives the weather prediction and map of the place searched</p>
          <Button variant="danger">Python</Button>{' '}
          <Button variant="success">Streamlit</Button>{' '}
          <Button variant="warning">API</Button>{' '}
          {/* <a href="https://ughrima-weather-prediction-file-atowip.streamlit.app/ " classname="btn">Live Demo</a> */}
        </article>

        </div> 
        <br></br>
<br></br>
<br></br>
<h2>Group Projects</h2>
        <div className="container portfolio_container">
        <article className="portfolio__item">
          <div className="portfolio__item-image"></div>
          <img src={openweb} alt="" />
          <h4>Open Website</h4>
          <p>Contributed in a team of people in making the website for OPEN community of UPES. </p>
          <Button variant="danger">ReactJs</Button>{' '}
          <Button variant="warning">JavaScript</Button>{' '}
          {/* <a href="https://github.com/ughrima/Travel-Website" className="btn">Code</a> */}
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image"></div>
          <img src={opencert} alt="" />
          <h4>Open Certification</h4>
          <p>A project made on generating certificates of various types. I worked on the frontend.</p>
          <Button variant="danger">Html</Button>{' '}
          <Button variant="danger">CSS</Button>{' '}
          <Button variant="warning">JavaScript</Button>{' '}
          {/* <a href="https://github.com/ughrima/Travel-Website" className="btn">Code</a> */}
        </article>

           
        </div> 
    </section>
    
    
  )
}

export default Portfolio
