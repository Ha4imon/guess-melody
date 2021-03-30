import React, {PureComponent} from "react";
import PropTypes from "prop-types";

class AudioPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this.audioRef = React.createRef();
  }

  componentDidMount() {
    console.log(this.audioRef.current)
  }

  render() {
    const {src} = this.props;

    return (
      <React.Fragment>
        <button
          className="track__button track__button--play"
          type="button"
          onClick={this._onPlayAudio}
        ></button>
        <div className="track__status">
          <audio src={src} ref={this.audioRef}></audio>
        </div>
      </React.Fragment>
    );
  }

  _onPlayAudio = () => {
    this.audioRef.current.play();
  }

  _onStopAudio = () => {
    this.audioRef.current.stop();
  }
}

AudioPlayer.propTypes = {
  src: PropTypes.string.isRequired,
};

export {AudioPlayer};
