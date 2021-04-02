import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {AudioPlayer} from "../audio-player/audio-player.jsx";

class GameGenre extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activePlayer: -1,
    };
  }

  render() {
    const {question, onAnswer} = this.props;

    return (
      <section className="game game--genre">
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
          <h2 className="game__title">Выберите {question.genre} треки</h2>
          <form
            className="game__tracks"
            onSubmit={(evt) => {
              evt.preventDefault();
              onAnswer();
            }}
          >
            {question.answers.map((item, index) => {
              return (
                <div className="track" key={item.id}>
                  <AudioPlayer
                    src={item.src}
                    isPlaying={this.state.activePlayer === index}
                    onButtonClick={() => {
                      this.setState({
                        activePlayer:
                          this.state.activePlayer === index ? -1 : index,
                      });
                    }}
                  />
                  <div className="game__answer">
                    <input
                      className="game__input visually-hidden"
                      type="checkbox"
                      name="answer"
                      value={`answer-${item.genre}-${index}`}
                      id={`answer-${item.genre}-${index}`}
                    />
                    <label
                      className="game__check"
                      htmlFor={`answer-${item.genre}-${index}`}
                    >
                      Отметить
                    </label>
                  </div>
                </div>
              );
            })}

            <button className="game__submit button" type="submit">
              Ответить
            </button>
          </form>
        </section>
      </section>
    );
  }
}

GameGenre.propTypes = {
  onAnswer: PropTypes.func.isRequired,
  question: PropTypes.exact({
    type: PropTypes.oneOf([`genre`]),
    genre: PropTypes.oneOf([`rock`, `jazz`]),
    answers: PropTypes.arrayOf(
        PropTypes.exact({
          id: PropTypes.string.isRequired,
          src: PropTypes.string.isRequired,
          genre: PropTypes.oneOf([`rock`, `jazz`, `pop`]).isRequired,
        })
    ),
  }).isRequired,
};

export {GameGenre};
