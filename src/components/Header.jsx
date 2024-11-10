import React, { useRef, useState } from "react";
import "./header.css";
import navListData from "../data/NaveItems";

function Header() {
  const [selectedTag, setSelectedTag] = useState(navListData);
  const navRef = useRef();

  const activateTag = (id) => {
    setSelectedTag((prevTags) =>
      prevTags.map((tag) => {
        if (tag.id === id) {
          return { ...tag, active: true };
        } else {
          return { ...tag, active: false };
        }
      })
    );
  };
  return (
    <div className="header-container">
      <div className="header-navigation">
        <ul className="nav">
          {navListData.map((item) => (
            <li key={item.id}>
              <a
                onClick={() => activateTag(item.id)}
                className={item.active ? "active" : ""}
                href={item.link}
              >
                {item.name}
              </a>
            </li>
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
