import React, { useState } from "react";
import "./recommendation.css";

function Recommendation() {
  const [showPdf, setShowPdf] = useState(false);

  const openPdfModal = () => {
    setShowPdf(true);
    document.body.style.overflow = "hidden";
  };

  const closePdfModal = () => {
    setShowPdf(false);
    document.body.style.overflow = "auto";
  };
  return (
    <>
      <h1 className="rec-h1">Reflection & Recommendation</h1>
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
              professional designers helped me to see things from a
              <span className="bold"> unique perspective, </span>
              focusing on <span className="bold"> user experience </span> and
              details.
            </p>
            <p>
              Transitioning from <span className="bold"> web development </span>
              to <span className="bold"> dashboard interfaces </span> expanded
              my skills in interactive design and functionality, allowing me to
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
          <p className="glow-sentence" style={{ fontSize: "18px" }}>
            Click the letter to open it!
          </p>
          <div className="image-holder">
            <div className="cursor" onClick={openPdfModal}></div>
            <img
              className="holder-pic"
              src="images/letter-2.jpeg"
              alt="Recommendation letter"
            />
          </div>
        </div>
      </div>

      {showPdf && (
        <div className="pdf-modal" onClick={closePdfModal}>
          <div className="pdf-content" onClick={(e) => e.stopPropagation()}>
            <embed
              src="assets/recommendation-letter.pdf"
              type="application/pdf"
              width="100%"
              height="100%"
            />
          </div>
        </div>
      )}
      <div className="end-line"></div>
    </>
  );
}

export default Recommendation;
