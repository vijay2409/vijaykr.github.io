import React from "react";
import "./Skills.css";
import Tools from "../Tools/Tools";

const Tech_skills = [
  {
    id: 1,
    skill: "Java",
    img: "https://img.icons8.com/color/96/java-coffee-cup-logo--v1.png",
  },
  {
    id: 2,
    skill: "SpringBoot",
    img: "https://img.icons8.com/color/96/spring-logo.png",
  },
  {
    id: 3,
    skill: "SQL",
    img: "https://img.icons8.com/external-soft-fill-juicy-fish/60/000000/external-sql-coding-and-development-soft-fill-soft-fill-juicy-fish.png",
  },
  { id: 4, skill: "HTML", img: "https://img.icons8.com/color/256/html-5.png" },
  { id: 5, skill: "CSS", img: "https://img.icons8.com/fluency/256/css3.png" },
  {
    id: 6,
    skill: "JavaScript",
    img: "https://img.icons8.com/fluency/256/javascript.png",
  },
  {
    id: 7,
    skill: "React",
    img: "https://img.icons8.com/officel/256/react.png",
  },

  { id: 8, skill: "Node", img: "https://img.icons8.com/color/256/nodejs.png" },
  {
    id: 9,
    skill: "MongoDb",
    img: "https://img.icons8.com/color/256/mongodb.png",
  },
];

const Skills = () => {
  return (
    <>
      <div id="skills">
        <div id="skill-heading">
          <h1>Skills</h1>
        </div>
        <div id="skills_box">
          {Tech_skills.map((el) => {
            return (
              <div className="skills-card">
                <div id="skill-logo">
                  <img
                    className="skills-card-img"
                    src={el.img}
                    alt={el.skill}
                  />
                </div>
                <div className="skill-title">
                  <p className="skills-card-name">{el.skill}</p>
                </div>
              </div>
            );
          })}
        </div>
        <Tools />
      </div>
    </>
  );
};

export default Skills;
