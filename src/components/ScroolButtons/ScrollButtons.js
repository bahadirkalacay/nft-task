import { FaArrowCircleUp, FaArrowCircleDown } from "react-icons/fa";
import { useState } from "react";
import "./style.css"

const ScrollButtons = () => {
  const [showButton, setShowButton] = useState("button-up none");
  const [showButtonTwo, setShowButtonTwo] = useState("button-down");

  window.onscroll = function () {
    scrollFunction();
  };
  function scrollFunction() {
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
    ) {
      setShowButton("button-up");
    } else {
      setShowButton("none");
      setShowButtonTwo("button-down");
    }
  }
  function topFunction() {
    document.body.scrollTop -= 150;
    document.documentElement.scrollTop -= 150;
  }
  function bottomFunction() {
    document.body.scrollTop += 150;
    document.documentElement.scrollTop += 150;
  }
  return (
    <div>
      <button onClick={topFunction} id="button-up" className={showButton}>
        <FaArrowCircleUp />
      </button>
      <button
        onClick={bottomFunction}
        id="button-down"
        className={showButtonTwo}
      >
        <FaArrowCircleDown />
      </button>
    </div>
  );
};

export default ScrollButtons;
