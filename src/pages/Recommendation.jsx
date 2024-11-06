import React from "react";
import "./recommendation.css";

function Recommendation() {
  return (
    <div className="rec-container">
      <div className="rec-left">
        <div className="rec-bar">
          <div className="line"></div>
          <p>KISKA</p>
          <div className="line"></div>
        </div>
        <div className="internship-content">
          <p>
            Working in a <span className="bold">design company</span> with
            professional designers taught me to see things from a
            <span className="bold"> unique perspective, </span>
            focusing on <span className="bold"> user experience </span> and
            detail.
          </p>
          <p>
            Transitioning from <span className="bold"> web development </span>
            to <span className="bold"> dashboard interfaces </span> expanded my
            skills in interactive design and functionality, allowing me to
            approach projects with a broader technical perspective.
          </p>
        </div>
        <div className="rec-bar">
          <div className="line"></div>
          <p>KISKA</p>
          <div className="line"></div>
        </div>
      </div>
      <div className="rec-right">
        <img src="images/letter-holder.jpg" alt="Recommendation letter" />
      </div>
    </div>
  );
}

export default Recommendation;
