import React from 'react';
import './achievements.css';
import { FaTrophy, FaCode, FaAward, FaMedal } from 'react-icons/fa';

const Achievements = () => {
  const achievements = [
    {
      icon: <FaCode />,
      title: "LeetCode",
      description: "Solved 300+ Data Structures and Algorithms problems on LeetCode, maintaining consistency in problem-solving."
    },
    {
      icon: <FaTrophy />,
      title: "Paper Presentation - 1st Prize",
      description: "Won 1st prize as a solo team at IBM ICE Day held at UPES for my paper on Real-Time SLAM Implementation with LiDAR 515 for Precision Mapping and Navigation."
    },
    {
      icon: <FaAward />,
      title: "Hackathon Finalist",
      description: "Made it to the top 15 teams out of 100 teams in Hackathon 7.0 held by UPES-CSI."
    },
    {
      icon: <FaMedal />,
      title: "Coding Challenge Winner",
      description: "Won 10-day coding challenge held by Open Community during Open Learning Program."
    },
    {
      icon: <FaTrophy />,
      title: "Poster Presentation - 3rd Prize",
      description: "Won 3rd prize in Poster Presentation competition held for first-year students at UPES during IBM Ice Day."
    }
  ];

  return (
    <section id="achievements">
      <h5>My Accomplishments</h5>
      <h2>Achievements</h2>

      <div className="container achievements__container">
        {achievements.map((achievement, index) => (
          <article key={index} className="achievement__item">
            <div className="achievement__icon">
              {achievement.icon}
            </div>
            <h3>{achievement.title}</h3>
            <p>{achievement.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Achievements;



