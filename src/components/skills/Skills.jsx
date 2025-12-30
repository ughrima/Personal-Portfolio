import React from 'react';
import './skills.css';
import { FaCode, FaDatabase, FaRobot, FaCog } from 'react-icons/fa';

const Skills = () => {
  const skillCategories = [
    {
      icon: <FaCode />,
      title: "Languages",
      skills: ["Java", "Python", "Kotlin", "SQL"]
    },
    {
      icon: <FaCog />,
      title: "Technologies",
      skills: ["Spring Boot", "Angular", "Ktor", "Jetpack Compose", "TensorFlow Lite", "Docker", "Jenkins", "Git"]
    },
    {
      icon: <FaRobot />,
      title: "AI/ML",
      skills: ["LLMs", "RAG Pipelines", "GenAI APIs (Gemini/OpenAI)", "NLP", "Model Context Protocol (MCP)"]
    },
    {
      icon: <FaDatabase />,
      title: "Concepts",
      skills: ["Data Structures & Algorithms", "OOPS", "DBMS", "CI/CD", "System Design"]
    }
  ];

  return (
    <section id="skills">
      <h5>What I Know</h5>
      <h2>Technical Skills</h2>

      <div className="container skills__container">
        {skillCategories.map((category, index) => (
          <article key={index} className="skills__category">
            <div className="skills__header">
              <div className="skills__icon">{category.icon}</div>
              <h3>{category.title}</h3>
            </div>
            <div className="skills__list">
              {category.skills.map((skill, idx) => (
                <div key={idx} className="skill__item">
                  {skill}
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Skills;



