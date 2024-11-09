import React from "react";
import "./projects.css";
import { IoDiamond } from "react-icons/io5";

const experiences = [
  {
    title: "Jewelry Shop",
    description: "Built a responsive landing page with React.",
    date: "December 2018",
  },
  {
    title: "E-Commerce Platform",
    description: "Enhanced UX and animations for a shopping site.",
    date: "December 2018",
  },
  {
    title: "Portfolio Site",
    description: "Developed a personal portfolio with custom styling.",
    date: "December 2018",
  },
];

function Projects() {
  return (
    <>
      <h1 className="rec-h1">PROJECTS</h1>
      <div className="projects-container">
        <div className="main-line"></div>

        <div className="project-details">
          <div className="project-info">
            <div className="circle">
              <IoDiamond className="diamond-icon" />
            </div>
            <p className="project-date">December 2018</p>
          </div>

          <div className="project-description">
            <p className="project-name">Jewelry Shop</p>
            <p className="dec">
              Built a responsive landing page with React. It includes several
              interactive components and is fully responsive across devices.
            </p>
            <div className="project-buttons">
              <button>Code</button>
              <button>Live</button>
            </div>
          </div>
        </div>

        <div className="project-details">
          <div className="project-info">
            <div className="circle">
              <IoDiamond className="diamond-icon" />
            </div>
            <p className="project-date">June 2011</p>
          </div>

          <div className="project-description">
            <p className="project-name">E-commerce Dashboard</p>
            <p className="dec">
              Developed an interactive dashboard for managing e-commerce
              analytics, using React and Chart.js for data visualization.
            </p>
            <div className="project-buttons">
              <button>Code</button>
              <button>Live</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
