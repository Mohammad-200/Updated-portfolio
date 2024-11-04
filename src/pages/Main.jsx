import React from "react";
import "./main.css";

function Main() {
  return (
    <div className="main-container">
      <div className="centered-container">
        <div className="main-left">
          <div>
            <label>Profile</label>
            <p>
              Work for money and program for love! I'm Mohammad, a
              <span> Full stack</span> developer based in Romania
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
        <div className="main-right" style={{ textAlign: "right" }}>
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
            <p className="big-font">+100</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
