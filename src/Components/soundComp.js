import React from "react";
import Sound from "react-sound";
import soundRain from "../Audio/Rain.mp3";
import soundFire from "../Audio/Fire.mp3";
import soundOcean from "../Audio/Ocean.mp3";
import soundBirds from "../Audio/Birds.mp3";
import noSound from "../Audio/NoSound.mp3";

let soundfile = "";
class SoundComp extends React.Component {
  render() {
    console.log("SOUND", this.props.soundNum, noSound);

    if (this.props.soundNum === 0) {
      soundfile = soundFire;
      console.log("CASE WORKING");
    } else if (this.props.soundNum === 1) {
      soundfile = soundOcean;
    } else if (this.props.soundNum === 2) {
      soundfile = soundRain;
    } else if (this.props.soundNum === 3) {
      soundfile = soundBirds;
    } else {
      soundfile = noSound;
    }

    return (
      <Sound
        url={soundfile}
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

export default SoundComp;
