import React from "react";
import "./main.css";
import crownImage from "../images/crown-2.jpg";

function Main() {
  return (
    <div className="main-container">
      <div className="main-left">
        <div className="main-left-container">
          <div className="portfolio-logo">
            <img className="logo" src={crownImage} />
            <p className="portfolio-name">Mohammad Kizawi</p>
          </div>
          <p className="creativity-sentence">Be creative, Be Impressive</p>
          <p className="my-role">Creative Designer and Full stack Developer</p>
          <p>
            Fun fact, this picture is not me, the AI promised this is what I'd
            look like in 10 years, but for now, I'm just coding myself into my
            future shape. Let's hope debugging doesn't involve any mirrors!
          </p>
          <div className="main-buttons">
            <button className="resume-btn">Resume</button>
            <button className="contact-btn">Contact</button>
          </div>
        </div>
      </div>
      <div className="main-right">right</div>
    </div>
  );
}

export default Main;
