import React from "react";
import logo from "./LOGO4.png";
import "./App.css";
import MainBlock from "./Components/mainblock";

function App() {
  // const style = {
  //   color: "red"
  // };

  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <MainBlock />
    </div>
  );
}

export default App;
