import React from "react";
import "./header.css";
import navListData from "../data/NaveItems";

function Header() {
  return (
    <div className="header-container">
      <div className="header-navigation">
        <ul className="ul-nav">
          {navListData.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>

      <div className="personal-links">
        <img src="images/email-logo2.jpg" />
        <img src="images/github-logo.png" />
        <img src="images/cv-logo3.jpg" />
      </div>
    </div>
  );
}

export default Header;
