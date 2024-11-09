import React from "react";
import "./projects.css";
import { IoDiamond } from "react-icons/io5";

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
            <p className="project-date left-margin">December 2021</p>
          </div>

          <div className="project-description">
            <p className="project-name">Jewelry Shop</p>
            <p className="dec">
              My first first Javascript project, a jewelry shop that i did for
              university, its so basic and its not responsive, but i decided to
              add it to my portfolio to show how did I start with Javascript
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
              A clone for a design company build using react, I was new to react
              here and building websites here and there helped me to master this
              library
            </p>

            <div className="project-buttons">
              <a
                href="https://github.com/your-repo-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
              <a
                href="https://your-live-demo-link.com"
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
              My Graduation project, Build uing React, Node JS, Mongo DB and
              Express, This is one of the biggest projects that I worked on with
              a chat system functionality. The app is not hosted yet but I
              included an introductional video and the source code.
            </p>

            <div className="project-buttons">
              <a
                href="https://github.com/your-repo-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
              <a
                href="https://your-live-demo-link.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
