import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {WelcomeScreen} from "../welcome-screen/welcome-screen.jsx";
import {GameGenre} from "../game-genre/game-genre.jsx";
import {GameArtist} from "../game-artist/game-artist.jsx";

class App extends PureComponent {
  static getScreen(props, state, clickHandler) {
    const {question} = state;

    if (question === -1) {
      const {gameTime, gameMistakes} = props;

      return (
        <WelcomeScreen
          time={gameTime}
          mistakes={gameMistakes}
          onStartButtonClick={clickHandler}
        />
      );
    }

    const {gameQuestions} = props;
    const currentQuestion = gameQuestions[question];

    switch (currentQuestion.type) {
      case `genre`:
        return (
          <GameGenre
            question={gameQuestions[question]}
            onUserAnswer={clickHandler}
          />
        );
      case `artist`:
        return (
          <GameArtist
            question={gameQuestions[question]}
            onAnswer={clickHandler}
          />
        );
    }

    return null;
  }

  constructor(props) {
    super(props);

    this.state = {
      question: -1,
    };
  }

  render() {
    const userAnswerHandler = () => {
      this.setState((prevState) => {
        const {gameQuestions} = this.props;
        const nextIndex = prevState.question + 1;
        const isEnd = nextIndex >= gameQuestions.length;

        return {
          ...prevState,
          question: !isEnd ? nextIndex : -1,
        };
      });
    };

    return App.getScreen(this.props, this.state, userAnswerHandler);
  }
}

App.propTypes = {
  gameTime: PropTypes.number.isRequired,
  gameMistakes: PropTypes.number.isRequired,
  gameQuestions: PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.exact({
          type: PropTypes.oneOf([`genre`]),
          genre: PropTypes.oneOf([`rock`, `jazz`]),
          answers: PropTypes.arrayOf(
              PropTypes.exact({
                src: PropTypes.string.isRequired,
                genre: PropTypes.oneOf([`rock`, `jazz`, `pop`]).isRequired,
              })
          ),
        }),
        PropTypes.exact({
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
        }),
      ])
  ).isRequired,
};

export {App};
