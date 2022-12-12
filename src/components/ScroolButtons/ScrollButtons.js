import { useState } from "react";
import { FaArrowCircleUp, FaArrowCircleDown } from "react-icons/fa";
import "./style.css";

const ScrollButtons = () => {
  const [visiable, setVisible] = useState(false);
  const downScroll = () => {
    window.scroll({
      top: document.body.offsetHeight,
      left: 0,
      behavior: "smooth",
    });
  };
  
  function toggleVisible() {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 200) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }
  function bottomVisible() {
    const scrolledbottom = document.documentElement.scrollHeight;
    if (scrolledbottom < 200) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function csrollBottom(){
    window.scrollTo({
      bottom: 0,
      behavior: "smooth",
    });
  }

  window.addEventListener("scroll", toggleVisible);
  window.addEventListener("scrollbottom", bottomVisible);

  return (
    <div>
      <button
        className={`${"btn"} ${"scrollBtn"} ${visiable ? "visiable" : ""}`}
        onClick={scrollToTop}
      >
        <FaArrowCircleUp />
      </button>
      <button onClick={downScroll} className="button-down">
        <FaArrowCircleDown />
      </button>
    </div>
  );
};

export default ScrollButtons;
