import React from "react";
import "./Experiance.css";
const Projects = () => {
  return (
    <>
      <div id="experiance">
        <div id="project-heading">
          <h1>Experiance</h1>
        </div>
        <div className="my_projects">
          <div className="project-card">
            <div className="project-title">
              <img src="image/cg.png" alt="" />
              <h3>Designation - Senior Software Engineer</h3>
            </div>
            <div className="project-description">
              <p>
                Worked as a Software developer and contributed to the end-to-end
                development of the modules in the Project
              </p>
              <p>
                Designed and implement the back-end of the application using
                SpringBoot
              </p>
              <p>Trained in Java Full Stack Development with React</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
