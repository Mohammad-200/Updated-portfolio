import React, { useState } from "react";
import "./projects.css";
import { IoDiamond } from "react-icons/io5";

function Projects() {
  const [showVideo, setShowVideo] = useState(false);

  const handleVideoToggle = () => {
    setShowVideo(!showVideo);
  };
  return (
    <>
      <h1 className="rec-h1" id="projects">
        PROJECTS
      </h1>
      <div className="projects-container">
        <div className="main-line"></div>

        <div className="project-details">
          <div className="project-info">
            <div className="circle">
              <IoDiamond className="diamond-icon" />
            </div>
            <p className="project-date left-margin">December 2021</p>
          </div>

          <div className="project-description">
            <p className="project-name">Jewelry Shop</p>
            <p className="dec">
              This was my first JavaScript project, a jewelry shop application
              created for a university assignment. While it's simple, I chose to
              include it in my portfolio to demonstrate my early experience and
              foundational skills in JavaScript.
            </p>

            <div className="project-buttons">
              <a
                href="//github.com/Mohammad-200/Jewelry-Shop"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
              <a
                href="//mohammad-200.github.io/Jewelry-Shop/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
            </div>
          </div>
        </div>

        <div className="project-details">
          <div className="project-info">
            <div className="circle">
              <IoDiamond className="diamond-icon" />
            </div>
            <p className="project-date right-margin">October 2022</p>
          </div>

          <div className="project-description">
            <p className="project-name">Design agency </p>
            <p className="dec">
              A clone of a design company website, built with React and
              integrated with APIs to fetch and display dynamic content. Only
              the homepage is implemented and responsive, showcasing seamless
              data integration and API handling.
            </p>

            <div className="project-buttons">
              <a
                href="https://github.com/Mohammad-200/kiska"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
              <a
                href="https://mohammad-200.github.io/kiska"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
            </div>
          </div>
        </div>
        <div className="project-details">
          <div className="project-info">
            <div className="circle">
              <IoDiamond className="diamond-icon" />
            </div>
            <p className="project-date left-margin">July 2024</p>
          </div>

          <div className="project-description">
            <p className="project-name">Movie app with chatting system </p>
            <p className="dec">
              My graduation project, developed using React, Node.js, MongoDB,
              and Express, is one of the largest projects I’ve completed. It
              includes a fully functional chat system. Although the app is not
              yet hosted, I have provided an introductory video and the source
              code to showcase its features and functionality.
            </p>

            <div className="project-buttons">
              <button onClick={handleVideoToggle} className="video-button">
                Video
              </button>
              <a
                href="https://your-live-demo-link.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
            </div>
            {showVideo && (
              <div className="video-overlay">
                <button className="close-button" onClick={handleVideoToggle}>
                  X
                </button>
                <video className="full-video" controls autoPlay>
                  <source src="assets/cinema1.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="end-line"></div>
    </>
  );
}

export default Projects;
