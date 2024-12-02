import React, { useState } from "react";
import "./projects.css";
import { IoDiamond } from "react-icons/io5";
import { SiThemoviedatabase } from "react-icons/si";

function Projects() {
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
              created when I was a university student. I chose to include it in
              my portfolio to demonstrate my early experience and foundational
              skills in JavaScript.
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
              <SiThemoviedatabase className="diamond-icon" />
            </div>
            <p className="project-date right-margin">July 2024</p>
          </div>

          <div className="project-description">
            <p className="project-name">Movie app with chatting system </p>
            <p className="dec">
              My <span className="bold">graduation project</span>, developed
              using React, Node.js, MongoDB, and Express, is one of the largest
              projects I’ve completed. It includes a fully functional live chat
              system using Socket.io and is connected to an online API to
              provide more than 10,000 movies.{" "}
              <span style={{ color: "red" }}>
                Please wait around 50 seconds when you launch the app until the
                backend reloads.
              </span>
            </p>

            <div className="project-buttons">
              <a
                href="https://github.com/Mohammad-200/Cinema"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
              <a
                href="https://mohammad-200.github.io/Cinema"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
            </div>
          </div>
        </div>
        {/* <div className="project-details">
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
              <button className="video-button">Video</button>
              <a
                href="https://github.com/Mohammad-200/Cinema"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </div>
          </div>
        </div> */}
      </div>
      <div className="end-line"></div>
    </>
  );
}

export default Projects;
