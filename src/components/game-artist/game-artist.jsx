import React from "react";
import PropTypes from "prop-types";

const GameArtist = (props) => {
  const {question, onAnswer} = props;

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
          <div className="track">
            <button
              className="track__button track__button--play"
              type="button"
            ></button>
            <div className="track__status">
              <audio></audio>
            </div>
          </div>
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
              <div className="artist" key={`artist-${item.type}-${index}`}>
                <input
                  className="artist__input visually-hidden"
                  type="radio"
                  name="answer"
                  value={`artist-${item.type}-${index}`}
                  id={`artist-${item.type}-${index}`}
                />
                <label className="artist__name" htmlFor={`artist-${item.type}-${index}`}>
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
};

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
          picture: PropTypes.string.isRequired,
          artist: PropTypes.string.isRequired,
        })
    ),
  }).isRequired,
};

export {GameArtist};
