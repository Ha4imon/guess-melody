import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {AudioPlayer} from "../audio-player/audio-player.jsx";

class GameGenre extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activePlayer: -1,
      checkboxValues: [],
    };

    this._checboxHandler = this._checboxHandler.bind(this);
    this._activePlayerHandler = this._activePlayerHandler.bind(this);
    this._formSubmitHandler = this._formSubmitHandler.bind(this);
  }

  componentWillUnmount() {
    console.log(112);
  }

  render() {
    const {question} = this.props;

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
          <form className="game__tracks" onSubmit={this._formSubmitHandler}>
            {question.answers.map((item, index) => {
              return (
                <div className="track" key={`${item.id}${index}`}>
                  <AudioPlayer
                    src={item.src}
                    isPlaying={this.state.activePlayer === index}
                    onButtonClick={() => {
                      this._activePlayerHandler(index);
                    }}
                  />
                  <div className="game__answer">
                    <input
                      className="game__input visually-hidden"
                      type="checkbox"
                      name={`answer-${item.genre}-${index}`}
                      value={item.genre}
                      id={`answer-${item.genre}-${index}`}
                      onChange={(evt) => this._checboxHandler(evt, index)}
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

  _activePlayerHandler(index) {
    this.setState((prevState) => ({
      activePlayer: prevState.activePlayer === index ? -1 : index,
    }));
  }

  _checboxHandler(evt, index) {
    const {checkboxValues} = this.state;

    const test = checkboxValues.map((item) => {
      return item;
    });
    test[index] = evt.target.checked;
    console.log(this.state);
    this.setState({test});
  }

  _formSubmitHandler(evt) {
    evt.preventDefault();

    const {checkboxValues} = this.state;
    const {onAnswer, question} = this.props;

    console.log(checkboxValues);

    const userAnswers = question.answers.map((item, index) => {
      return checkboxValues[index] === true ? checkboxValues[index] : false;
    });

    onAnswer(userAnswers, question);
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
