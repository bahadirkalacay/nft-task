import React from "react";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./styles.css";

const Header = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <div className="background">
    <header className="header">
      <div>
        <h1>
          V<span>erlith</span>
        </h1>
      </div>
      <div>
        <nav className="nav" ref={navRef}>
          <a href="/#">NFT</a>
          <a href="/#">Whitepaper</a>
          <a href="/#">Socials</a>
          <a href="/#">HX13 Company</a>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </div>
    </header>
    </div>
  );
};

export default Header;
