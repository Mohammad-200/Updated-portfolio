import React from "react";
import "./main.css";

function Main() {
  return (
    <>
      <div className="main-container" id="home">
        <div className="centered-container">
          <div className="main-left">
            <div>
              <label>Profile</label>
              <p>
                Code is my passion, and solving problems is my drive. I’m
                Mohammad, a <span> Full stack</span> Developer based in Romania.
              </p>
            </div>
            <div>
              <label>Contact</label>
              <p>mohammad.kizawi@gmail.com</p>
              <p>+40724952701</p>
            </div>
            <div>
              <label>Services</label>
              <p>Frontend developer</p>
              <p>backend developer</p>
            </div>
          </div>
          <div className="main-pic">
            <img src="images/personal-image.jpeg" />
            <div className="image-border"></div>
          </div>
          <div className="main-right">
            <div>
              <label>Years of experience</label>
              <p className="big-font">2</p>
            </div>
            <div>
              <label>Work Satisfaction</label>
              <p className="big-font">100%</p>
            </div>
            <div>
              <label>Projects done</label>
              <p className="big-font">+120</p>
            </div>
            <div>
              <label>Languages Spoken</label>
              <p className="big-font">3</p>
            </div>
          </div>
        </div>
        <div className="main-companies-logos">
          <img src="images/uvt-logo.png" alt="" />
          <img src="images/jku-logo.png" alt="" />
          <img src="images/kiska-logo.png" alt="" style={{ width: "150px" }} />
          <img src="images/ktm-logo.png" alt="" />
          <img src="images/gasgas-logo.png" alt="" />
        </div>
      </div>
      <div className="end-line"></div>
    </>
  );
}

export default Main;
