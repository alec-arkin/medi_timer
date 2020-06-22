import React from "react";
import Sound from "react-sound";
import Finish from "../Audio/FinishSound.mp3";

class FinishPopUpComp extends React.Component {
  render() {
    return (
      <Sound
        url={Finish}
        playStatus={Sound.status.PLAYING}
        playFromPosition={0 /* in milliseconds */}
        onLoading={this.handleSongLoading}
        onPlaying={this.handleSongPlaying}
        onFinishedPlaying={this.handleSongFinishedPlaying}
        autoLoad={false}
      />
    );
  }
}

export default FinishPopUpComp;
