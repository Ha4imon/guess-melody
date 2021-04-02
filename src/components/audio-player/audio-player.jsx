import React, {PureComponent} from "react";
import PropTypes from "prop-types";

class AudioPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this.audioRef = React.createRef();

    this.state = {
      isLoading: true,
      progressTime: 0,
    };

    this._onPlayButtonClick = this._onPlayButtonClick.bind(this);
  }

  componentDidMount() {
    const {src} = this.props;
    const audio = this.audioRef.current;
    audio.src = src;

    audio.oncanplaythrough = () => {
      this.setState({isLoading: false});
    };

    // audio.ontimeupdate = () => {
    //   this.setState({ progressTime: this.audioRef.current.currentTime });
    // };
  }

  componentDidUpdate() {
    if (this.props.isPlaying === true) {
      this.audioRef.current.play();
    } else {
      this.audioRef.current.pause();
    }
  }

  componentWillUnmount() {}

  render() {
    const {isPlaying} = this.props;
    const {isLoading} = this.state;

    return (
      <React.Fragment>
        <button
          className={`track__button track__button--${
            isPlaying ? `pause` : `play`
          }`}
          type="button"
          disabled={isLoading}
          onClick={this._onPlayButtonClick}
        ></button>
        <div className="track__status">
          <audio ref={this.audioRef}></audio>
        </div>
      </React.Fragment>
    );
  }

  _onPlayButtonClick() {
    const {onButtonClick} = this.props;

    onButtonClick();
  }
}

AudioPlayer.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  onButtonClick: PropTypes.func.isRequired,
};

export {AudioPlayer};
