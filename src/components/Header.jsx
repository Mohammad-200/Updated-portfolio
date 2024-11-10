import React, { useRef, useState } from "react";
import "./header.css";
import navListData from "../data/NaveItems";
import NavListItem from "./NavListItem";
import { IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";

function Header() {
  // use this state in case you want to activate the active state for the navbar
  const [selectedTag, setSelectedTag] = useState(navListData);
  const navRef = useRef();

  const activateTag = (id) => {
    if (navRef.current.classList.contains("responsive_nav")) showNavBar();
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

  const showNavBar = () => navRef.current.classList.toggle("responsive_nav");

  return (
    <div className="header-container">
      <div className="header-navigation">
        <ul className="nav" ref={navRef}>
          <button onClick={showNavBar} className="nav-btn nav-close-button">
            <IoMdClose />
          </button>
          {navListData.map((item) => (
            <NavListItem key={item.id} item={item} activateTag={activateTag} />
          ))}
        </ul>
        <button onClick={showNavBar} className="nav-btn">
          <RxHamburgerMenu />
        </button>
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
