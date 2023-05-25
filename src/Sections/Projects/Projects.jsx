import React from "react";
import "./Projects.css";
import { BsGithub } from "react-icons/bs";
import { SiNetlify } from "react-icons/si";
const Projects = () => {
  const expGit = () => {
    window.open("https://github.com/vijay2409/Portfolio.github.io");
  };

  const expDem = () => {
    window.open("https://vijay2409.github.io/Portfolio.github.io/");
  };

  const urbanGit = () => {
    window.open("https://github.com/vijay2409/dexui");
  };

  const craftsGit = () => {
    window.open("https://github.com/vijay2409/BookStoreManagementApplication");
  };

  const beGit = () => {
    window.open(
      "https://github.com/vijay2409/ElectricityBillPaymentApplication"
    );
  };

  return (
    <>
      <div id="projects">
        <div id="project-heading">
          <h1>Projects</h1>
        </div>
        <div className="my_projects">
          <div className="project-card">
            <div className="project-image">
              <img
                src="image/project1.jpg"
                alt="Electricity Bill Payment Application"
              />
            </div>
            <div className="project-info">
              <div className="project-title">
                <h2>Electricity Bill Payment Application</h2>
              </div>
              <div className="project-description">
                <p>Used postman for testing API calls</p>
                <p>
                  An online electricity bill payment application providing self
                  service facility to view and pay bill online and other related
                  services.
                </p>
              </div>
              <div className="project-tech-stack">
                <p>
                  Tech-Stack: Java | Spring Boot | Spring Data JPA | PostgreSQL
                </p>
              </div>
              <div className="project-links">
                <button className="project-github-link" onClick={beGit}>
                  <BsGithub />
                </button>
              </div>
            </div>
          </div>
          <div className="project-card2">
            <div className="project-image2">
              <img src="image/project2.jpg" alt="" />
            </div>
            <div className="project-info2">
              <div className="project-title2">
                <h2>Book Store Management Application</h2>
              </div>
              <div className="project-description2">
                <p>Used postman for testing API calls</p>
                <p>An online E-Book store to provide the digital books.</p>
              </div>
              <div className="project-tech-stack2">
                <p>
                  Tech-Stack: Java | Spring Boot | Spring Data JPA | PostgreSQL
                </p>
              </div>
              <div className="project-links2">
                <button className="project-github-link2" onClick={craftsGit}>
                  <BsGithub />
                </button>
              </div>
            </div>
          </div>
          <div className="project-card">
            <div className="project-image">
              <img src="image/project3.jpg" alt="" />
            </div>
            <div className="project-info">
              <div className="project-title">
                <h2>Decentralized Exchange Application Using BlockChain</h2>
              </div>
              <div className="project-description"></div>
              <div className="project-tech-stack">
                <p>Solidity | React</p>
              </div>
              <div className="project-links">
                <button className="project-github-link" onClick={urbanGit}>
                  <BsGithub />
                </button>
              </div>
            </div>
          </div>
          <div className="project-card2">
            <div className="project-image2">
              <img src="image/project4.jpg" alt="Portfolio" />
            </div>
            <div className="project-info2">
              <div className="project-title2">
                <h2>Portfolio</h2>
              </div>
              <div className="project-description2"></div>
              <div className="project-tech-stack2">
                <p>Tech-Stack: HTML | CSS | JavaScript </p>
              </div>
              <div className="project-links2">
                <button className="project-github-link2" onClick={expGit}>
                  <BsGithub />
                </button>
                <button className="project-deployed-link2" onClick={expDem}>
                  <SiNetlify />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
