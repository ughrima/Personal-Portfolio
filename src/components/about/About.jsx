import React from 'react'
import './about.css'
import me from "../../assets/agrima.jpg"

const About = () => {
  return (
    <section id="about">
      <div className="code-section">
        <span className="code-keyword">const</span> <span className="code-variable">about</span> = <span className="code-bracket">{'{'}</span>
      </div>
      
      <div className="code-block">
        <div className="code-line">
          <span className="code-property">name</span>: <span className="code-string">"Agrima Jain"</span>,
        </div>
        <div className="code-line">
          <span className="code-property">role</span>: <span className="code-string">"AI & Tech Developer"</span>,
        </div>
        <div className="code-line">
          <span className="code-property">education</span>: <span className="code-bracket">{'{'}</span>
        </div>
        <div className="code-indent">
          <div className="code-line">
            <span className="code-property">degree</span>: <span className="code-string">"B.Tech Computer Science and Engineering"</span>,
          </div>
          <div className="code-line">
            <span className="code-property">university</span>: <span className="code-string">"UPES, Dehradun"</span>,
          </div>
          <div className="code-line">
            <span className="code-property">cgpa</span>: <span className="code-number">8.66</span>
          </div>
        </div>
        <div className="code-line">
          <span className="code-bracket">{'}'}</span>,
        </div>
        <div className="code-line">
          <span className="code-property">bio</span>: <span className="code-string">`I'm a passionate AI & Tech Developer with a strong foundation in software engineering and machine learning. Currently pursuing my B.Tech in Computer Science and Engineering at UPES, I've gained valuable experience working with cutting-edge technologies including LLMs, RAG pipelines, and enterprise automation systems. My journey includes internships at DESRI and Dell Technologies, where I've contributed to real-world projects involving AI-driven solutions and backend modernization. I'm also actively involved in research on SLAM (Simultaneous Localization and Mapping) for drone navigation. With a growth mindset and dedication to continuous learning, I'm always excited to take on new challenges and contribute to innovative solutions.`</span>
        </div>
      </div>
      
      <div className="code-section">
        <span className="code-bracket">{'}'}</span>;
      </div>

      <div className="about-image-container">
        <div className="about-image-wrapper">
          <img src={me} alt="Agrima Jain" className="about-image" />
        </div>
      </div>

      <div className="code-section">
        <span className="code-keyword">export default</span> <span className="code-variable">about</span>;
      </div>
    </section>
  )
}

export default About


