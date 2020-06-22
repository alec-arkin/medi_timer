import React from "react";
import WorkComp from "./workComp";
import FinishPopUpComp from "./finishPopUp";
import timeImg from "../Pics/Clock.png";
import songImg from "../Pics/Melody.png";
import eyeImg from "../Pics/Eye.png";

class MainBlock extends React.Component {
  state = {
    time: 15000000,
    sound: null,
    image: null,
    // lang: true,
    working: false,
    finishPopUp: true
  };

  turnOffTimer = () => {
    console.log("Timer OFF");
    this.setState({ working: false });
    this.setState({ finishPopUp: !this.state.finishPopUp });
  };

  startStopWork = () => {
    this.setState({ working: !this.state.working });

    //start timer
    setTimeout(this.turnOffTimer, this.state.time);
    console.log("Timer working now!");
  };

  componentDidUpdate() {
    console.log(this.state.time, this.state.sound, this.state.image);
  }
  setTimeOne = () => {
    this.setState({ time: 15 * 60000 });
  };
  setTimeTwo = () => {
    this.setState({ time: 30 * 60000 });
  };
  setTimeThree = () => {
    this.setState({ time: 60 * 60000 });
  };
  setTimeFour = () => {
    this.setState({ time: 5 * 60000 });
  };
  setTimeFive = () => {
    this.setState({ time: 10 * 60000 });
  };

  render() {
    const mainStyle = {
      backgroundColor: "#c5c5c5",
      borderRadius: "23px",
      borderBottom: "outset",
      color: "#1f2020"
      // borderBottomColor: "red",
      // borderWidth: 2
    };
    let style1 = null;
    let style2 = null;
    let style3 = null;
    let style4 = null;
    let style5 = null;
    let style6 = null;
    let style7 = null;
    let style8 = null;
    let style9 = null;
    let style10 = null;
    let style11 = null;
    let style12 = null;
    let style13 = null;
    let style14 = null;
    let style15 = null;
    if (this.state.time === 900000) {
      style1 = mainStyle;
      console.log("Style applied");
    } else if (this.state.time === 1800000) {
      style2 = mainStyle;
    } else if (this.state.time === 3600000) {
      style3 = mainStyle;
    } else if (this.state.time === 300000) {
      style4 = mainStyle;
    } else if (this.state.time === 600000) {
      style5 = mainStyle;
    }
    if (this.state.sound === 0) {
      style6 = mainStyle;
    } else if (this.state.sound === 1) {
      style7 = mainStyle;
    } else if (this.state.sound === 2) {
      style8 = mainStyle;
    } else if (this.state.sound === 3) {
      style9 = mainStyle;
    } else if (this.state.sound === 4) {
      style10 = mainStyle;
    }
    if (this.state.image === 0) {
      style11 = mainStyle;
    } else if (this.state.image === 1) {
      style12 = mainStyle;
    } else if (this.state.image === 2) {
      style13 = mainStyle;
    } else if (this.state.image === 3) {
      style14 = mainStyle;
    } else if (this.state.image === 4) {
      style15 = mainStyle;
    }

    return (
      <div>
        {this.state.working ? (
          <div>
            <WorkComp
              selectedSound={this.state.sound}
              selectedTime={this.state.time}
              selectedImage={this.state.image}
            />
          </div>
        ) : null}
        {this.state.finishPopUp ? null : (
          <div>
            <FinishPopUpComp />
          </div>
        )}
        <div className="MainBlock">
          <img src={timeImg} className="imgPng" alt="Clock" />
          <div className="VariantBlock">
            <div className="Var" onClick={this.setTimeOne} style={style1}>
              <h3>15m</h3>
              {/* <h7>min</h7> */}
            </div>
            <div className="Var" onClick={this.setTimeTwo} style={style2}>
              <h3>30m</h3>
              {/* <h7>min</h7> */}
            </div>
            <div className="Var" onClick={this.setTimeThree} style={style3}>
              <h3>1h</h3>
              {/* <h7>hour</h7> */}
            </div>
            <div className="Var" onClick={this.setTimeFour} style={style4}>
              <h3>5m</h3>
              {/* <h7>min</h7> */}
            </div>
            <div className="Var" onClick={this.setTimeFive} style={style5}>
              <h3>10m</h3>
              {/* <h7>min</h7> */}
            </div>
          </div>
        </div>
        <div className="MainBlock">
          <img src={songImg} className="imgPng" alt="Song" />
          <div className="VariantBlock">
            <div
              style={style6}
              className="Var"
              onClick={() => {
                this.setState({ sound: 0 });
              }}
            >
              <h3>fire</h3>
              {/* <h7>image</h7> */}
            </div>
            <div
              className="Var"
              onClick={() => {
                this.setState({ sound: 1 });
              }}
              style={style7}
            >
              <h3>ocean</h3>
              {/* <h7>img</h7> */}
            </div>
            <div
              className="Var"
              onClick={() => {
                this.setState({ sound: 2 });
              }}
              style={style8}
            >
              <h3>rain</h3>
              {/* <h7>img</h7> */}
            </div>
            <div
              className="Var"
              onClick={() => {
                this.setState({ sound: 3 });
              }}
              style={style9}
            >
              <h3>birds</h3>
              {/* <h7>img</h7> */}
            </div>
            <div
              className="Var"
              onClick={() => {
                this.setState({ sound: 4 });
              }}
              style={style10}
            >
              <h3>mute</h3>
              {/* <h7>img</h7> */}
            </div>
          </div>
        </div>
        <div className="MainBlock">
          <img src={eyeImg} className="imgPng" alt="Eye" />
          <div className="VariantBlock">
            <div
              className="Var"
              onClick={() => {
                this.setState({ image: 0 });
              }}
              style={style11}
            >
              <h3>dot</h3>
              {/* <h7>img</h7> */}
            </div>
            <div
              className="Var"
              onClick={() => {
                this.setState({ image: 1 });
              }}
              style={style12}
            >
              <h3>inYan</h3>
              {/* <h7>img</h7> */}
            </div>
            <div
              className="Var"
              onClick={() => {
                this.setState({ image: 2 });
              }}
              style={style13}
            >
              <h3>lotus</h3>
              {/* <h7>img</h7> */}
            </div>
            <div
              className="Var"
              onClick={() => {
                this.setState({ image: 3 });
              }}
              style={style14}
            >
              <h3>candle</h3>
              {/* <h7>img</h7> */}
            </div>
            <div
              className="Var"
              onClick={() => {
                this.setState({ image: 4 });
              }}
              style={style15}
            >
              <h3>dark</h3>
              {/* <h7>img</h7> */}
            </div>
          </div>
        </div>
        <a className="button" onClick={this.startStopWork} href="#main">
          <span>{this.state.working ? "STOP" : "GO!"}</span>
        </a>
      </div>
    );
  }
}

export default MainBlock;
