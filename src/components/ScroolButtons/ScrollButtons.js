import { FaArrowCircleUp, FaArrowCircleDown } from "react-icons/fa";
import "./style.css"

const ScrollButtons = () => {

  const downScroll = () => {
    window.scroll({
      top: document.body.offsetHeight,
      left: 0, 
      behavior: 'smooth',
    });
  }
  const upScroll = () => {
    window.scroll({
      top: document.body.offsetTop,
      left: 0, 
      behavior: 'smooth',
    });
  }
  
  return (
    <div>
      <button onClick={upScroll}  className="button-up">
        <FaArrowCircleUp />
      </button>
      <button
        onClick={downScroll}
        className="button-down"
      >
        <FaArrowCircleDown />
      </button>
    </div>
  );
};

export default ScrollButtons;
