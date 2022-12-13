import React, { useState } from "react";
import { FaArrowCircleDown } from "react-icons/fa";
import "./style.css";
const ScrollDown = () => {
  const [visible, setVisible] = useState(true);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 400) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);
  return (
    <div>
      <button
        onClick={scrollToBottom}
        className="button-down"
        style={{ display: visible ? "inline" : "none" }}
      >
        <FaArrowCircleDown />
      </button>
    </div>
  );
};

export default ScrollDown;
