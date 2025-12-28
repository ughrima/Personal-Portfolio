import React from "react";
import "./portfolio.css"
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Portfolio = () => {
  const projects = [
    {
      title: "BiteWise",
      description: "Architected a digital nutrition assistant integrating on-device ML (MobileNetV2) for sub-100ms ingredient detection and cloud-based GenAI (Gemini) for dynamic recipe generation. Developed a modular client-server architecture with a secure Ktor backend, JWT authentication, and a Dockerized MySQL database managed via Exposed ORM.",
      technologies: ["Kotlin", "Jetpack Compose", "TensorFlow Lite", "Ktor", "Gemini API", "Docker"],
      github: "https://github.com/ughrima/your-repo-link",
      demo: null,
      category: "mobile"
    },
    {
      title: "TaskMate",
      description: "A comprehensive task management application to manage tasks and organize projects. Implemented user authentication features using Spring Security and JWT. Enabled users to add, edit, and delete projects with detailed descriptions, categorize them, and manage tasks within each project.",
      technologies: ["Spring Boot", "Angular", "MySQL", "REST APIs"],
      github: "https://github.com/ughrima/Task-Mate",
      demo: "https://taskmateweb.netlify.app/",
      category: "web"
    },
    {
      title: "News Flare",
      description: "Built a full pipeline to scrape, analyze, cluster, and satirize global news using modern NLP and transformers, displayed via an interactive Streamlit dashboard. Implemented sentiment analysis, topic modeling, and FLAN-T5-based humor generation for headlines and summaries.",
      technologies: ["Python", "NLP", "Streamlit", "FLAN-T5"],
      github: "https://github.com/ughrima/News-Flare",
      demo: "https://news-flare.streamlit.app/",
      category: "ai"
    }
  ];

  return (
    <section id="projects">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container portfolio_container">
        {projects.map((project, index) => (
          <article key={index} className="portfolio__item">
            <div className="portfolio__item-image">
              <div className="portfolio__image-placeholder">
                <h3>{project.title}</h3>
              </div>
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="portfolio__technologies">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="tech-tag">{tech}</span>
              ))}
            </div>
            <div className="portfolio__item-cta">
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn">
                  <FaGithub /> Code
                </a>
              )}
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  <FaExternalLinkAlt /> Live Demo
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
