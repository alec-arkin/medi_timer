import React from "react";
import dot from "../Pics/Dot.png";
import inYan from "../Pics/InYan.png";
import lotus from "../Pics/Lotus.png";
import candle from "../Pics/Candle.png";
import dark from "../Pics/Dark.png";
import timer from "../Pics/Timer.gif";
import "./PopUp.css";

let imagefile = "";
class ImageComp extends React.Component {
  // Image
  render() {
    if (this.props.imageNum === 0) {
      imagefile = dot;
    } else if (this.props.imageNum === 1) {
      imagefile = inYan;
    } else if (this.props.imageNum === 2) {
      imagefile = lotus;
    } else if (this.props.imageNum === 3) {
      imagefile = candle;
    } else {
      imagefile = dark;
    }
    return (
      <div className="popup1">
        <img className="myImg" src={imagefile} alt="Snow" />
        <img className="TimerImg" src={timer} alt="Timer" />
      </div>
    );
  }
}

export default ImageComp;
