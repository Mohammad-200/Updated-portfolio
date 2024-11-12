import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa6";
import "./liftToTop.css";

function LiftToTop() {
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowArrow(true);
      } else {
        setShowArrow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    document.getElementById("nav").scrollIntoView();
  };

  return (
    <div>
      {showArrow && (
        <div
          className={`lift-to-top ${showArrow ? "show" : ""}`}
          onClick={scrollToTop}
        >
          <FaArrowUp />
        </div>
      )}
    </div>
  );
}

export default LiftToTop;
