import React from 'react';
import './experience.css';
import { FaBriefcase } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      title: "AI & Tech Development Intern",
      company: "D. E. Shaw Renewable Investments (DESRI)",
      period: "September 2025 - Present",
      description: [
        "Developing enterprise automation workflows utilizing Large Language Models (LLMs) and RAG (Retrieval-Augmented Generation) pipelines to process complex documentation and reduce manual data entry.",
        "Engineering web and PDF scraping solutions to extract unstructured data, integrating with internal APIs to streamline operations across multiple business verticals.",
        "Implementing integrations with Workday APIs and experimenting with Model Context Protocol (MCP) to enhance internal tool interoperability and data accessibility."
      ]
    },
    {
      title: "Software Engineering Intern",
      company: "Dell Technologies, Bengaluru",
      period: "June 2025 – July 2025",
      description: [
        "Contributed to the modernization of backend systems in the Isilon distributed storage platform, focusing on uplifting legacy Python 2 code to Python 3.",
        "Refactored test infrastructure, ensuring seamless integration across clustered environments, and supporting CI/CD pipelines.",
        "Worked closely with cross-functional teams to improve system reliability, maintainability, and long-term scalability."
      ]
    },
    {
      title: "Researcher",
      company: "University of Petroleum and Energy Studies (UPES)",
      period: "May 2024 – Ongoing",
      description: [
        "Researching loop closure detection in SLAM using the Linear Partial Gromov-Wasserstein (LPGW) framework to improve map accuracy and trajectory correction in high-speed drone navigation.",
        "Benchmarking LPGW against existing techniques to evaluate robustness and drafting a publication based on the findings."
      ]
    }
  ];

  return (
    <section id="experience">
      <h5>What I've Done</h5>
      <h2>Experience</h2>

      <div className="container experience__container">
        <div className="experience__content">
          {experiences.map((exp, index) => (
            <article key={index} className="experience__item">
              <div className="experience__icon">
                <FaBriefcase />
              </div>
              <div className="experience__details">
                <h3>{exp.title}</h3>
                <h4>{exp.company}</h4>
                <small className="text-light">{exp.period}</small>
                <ul className="experience__description">
                  {exp.description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

