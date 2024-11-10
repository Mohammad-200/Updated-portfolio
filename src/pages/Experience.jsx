import React from "react";
import "./experience.css";

function Experience() {
  return (
    <>
      <div className="experience-container" id="experience">
        <div>
          <h1>Experience & Education</h1>
          <div className="exp-info">
            {/* Education Section */}
            <div className="exp-left">
              <label>2021</label>
              <div className="col">
                <div className="uni-1">
                  <h5>West University of Timisoara</h5>
                  <p>Computer Science Degree</p>
                </div>
                <div className="uni-2">
                  <h5>Johannes Kepler University</h5>
                  <p>Computer Science Semester (Erasmus)</p>
                </div>
              </div>
            </div>

            {/* Internship Section */}
            <div className="exp-mid">
              <label>Internship - KISKA</label>
              <div className="col">
                <div>
                  <h5>High-Profile Client Projects</h5>
                  <p>
                    Developed interactive web apps for clients like KTM and
                    KISKA.
                  </p>
                </div>
                <div>
                  <h5>Enhanced User Experience</h5>
                  <p>
                    Created animations and UI in close collaboration with
                    designers.
                  </p>
                </div>
                <div>
                  <h5>Inventory Management App</h5>
                  <p>
                    Built an inventory app with React, TypeScript, and Golang.
                  </p>
                </div>
                <div>
                  <h5>State Management & Testing</h5>
                  <p>
                    Used MobX library, Git for version control, and Selenium for
                    testing.
                  </p>
                </div>
                <div>
                  <h5>Team Collaboration</h5>
                  <p>Weekly progress meetings to align on development goals.</p>
                </div>
              </div>
            </div>

            {/* Skills Section */}
            <div className="exp-right">
              <label>2021 - 2024</label>
              <div className="col">
                <div>
                  <h5>React & TypeScript</h5>
                  <p>Proficient in building dynamic, responsive web apps.</p>
                </div>
                <div>
                  <h5>UI/UX Design Collaboration</h5>
                  <p>
                    Experience in translating design mockups into functional
                    UIs.
                  </p>
                </div>
                <div>
                  <h5>State Management</h5>
                  <p>Skilled in MobX and Redux for efficient state handling.</p>
                </div>
                <div>
                  <h5>Front-End Testing</h5>
                  <p>
                    Experience with Selenium and Jest for ensuring stability.
                  </p>
                </div>
                <div>
                  <h5>Version Control</h5>
                  <p>
                    Fluent in Git for collaborative project work and versioning.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="end-line"></div>
    </>
  );
}

export default Experience;
