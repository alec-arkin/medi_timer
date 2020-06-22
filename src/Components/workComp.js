import React from "react";
import SoundComp from "./soundComp";
import ImageComp from "./imageComp";
import DingComp from "./dingComp";

class WorkComp extends React.Component {
  render() {
    return (
      <div className="working-comp">
        <SoundComp soundNum={this.props.selectedSound} />
        <ImageComp imageNum={this.props.selectedImage} />
        <DingComp />
      </div>
    );
  }
}

export default WorkComp;
