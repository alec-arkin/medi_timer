import React from "react";
import Sound from "react-sound";
import dingFile from "../Audio/Ding.mp3";

class DingComp extends React.Component {
  render() {
    return (
      <Sound
        url={dingFile}
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

export default DingComp;
