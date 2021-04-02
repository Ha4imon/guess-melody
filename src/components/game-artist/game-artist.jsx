import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {AudioPlayer} from "../audio-player/audio-player.jsx";

class GameArtist extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isPlayerPlaiyng: false,
    };
  }

  render() {
    const {question, onAnswer} = this.props;

    return (
      <section className="game game--artist">
        <header className="game__header">
          <a className="game__back" href="#">
            <span className="visually-hidden">Сыграть ещё раз</span>
            <img
              className="game__logo"
              src="img/melody-logo-ginger.png"
              alt="Угадай мелодию"
            />
          </a>

          <div className="timer__value" xmlns="http://www.w3.org/1999/xhtml">
            <span className="timer__mins">05</span>
            <span className="timer__dots">:</span>
            <span className="timer__secs">00</span>
          </div>

          <div className="game__mistakes">
            <div className="wrong"></div>
            <div className="wrong"></div>
            <div className="wrong"></div>
          </div>
        </header>

        <section className="game__screen">
          <h2 className="game__title">Кто исполняет эту песню?</h2>
          <div className="game__track">
            <AudioPlayer
              src={question.song.src}
              isPlaying={this.state.isPlayerPlaiyng}
              onButtonClick={() => {
                this.setState((prevState) => ({
                  isPlayerPlaiyng: !prevState.isPlayerPlaiyng,
                }));
              }}
            />
          </div>

          <form
            className="game__artist"
            onChange={(evt) => {
              evt.preventDefault();
              onAnswer();
            }}
          >
            {question.answers.map((item, index) => {
              return (
                <div className="artist" key={item.id}>
                  <input
                    className="artist__input visually-hidden"
                    type="radio"
                    name="answer"
                    value={`artist-${item.type}-${index}`}
                    id={`artist-${item.type}-${index}`}
                  />
                  <label
                    className="artist__name"
                    htmlFor={`artist-${item.type}-${index}`}
                  >
                    <img
                      className="artist__picture"
                      src={item.picture}
                      alt={item.artist}
                    />
                    Пелагея
                  </label>
                </div>
              );
            })}
          </form>
        </section>
      </section>
    );
  }
}

GameArtist.propTypes = {
  onAnswer: PropTypes.func.isRequired,
  question: PropTypes.exact({
    type: PropTypes.oneOf([`artist`]),
    song: PropTypes.exact({
      artist: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
    }),
    answers: PropTypes.arrayOf(
        PropTypes.exact({
          id: PropTypes.string.isRequired,
          picture: PropTypes.string.isRequired,
          artist: PropTypes.string.isRequired,
        })
    ),
  }).isRequired,
};

export {GameArtist};
