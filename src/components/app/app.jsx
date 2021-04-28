import React, {PureComponent} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";

import {ActionCreator} from "../../reducer";
import {WelcomeScreen} from "../welcome-screen/welcome-screen.jsx";
import {GameGenre} from "../game-genre/game-genre.jsx";
import {GameArtist} from "../game-artist/game-artist.jsx";

class App extends PureComponent {
  constructor(props) {
    super(props);

    this._getScreen = this._getScreen.bind(this);
    // this._userAnswerHandler = this._userAnswerHandler.bind(this);
  }

  render() {
    return this._getScreen(this.props);
  }

  _getScreen(props) {
    const {step, onWelcomeScreenClick, onUserAnswer} = props;

    if (step === -1) {
      const {gameTime, gameMistakes} = props;

      return (
        <WelcomeScreen
          time={gameTime}
          mistakes={gameMistakes}
          onStartButtonClick={onWelcomeScreenClick}
        />
      );
    }

    const {gameQuestions, mistakes, gameMistakes} = props;
    const currentQuestion = gameQuestions[step];

    switch (currentQuestion.type) {
      case `genre`:
        return (
          <GameGenre
            question={gameQuestions[step]}
            onAnswer={(userAnswer, question) => {
              onUserAnswer(userAnswer, question, mistakes, gameMistakes);
            }}
          />
        );
      case `artist`:
        return (
          <GameArtist
            question={gameQuestions[step]}
            onAnswer={(userAnswer, question) => {
              onUserAnswer(userAnswer, question, mistakes, gameMistakes);
            }}
          />
        );
    }

    return null;
  }

  // _userAnswerHandler() {
  //   this.setState((prevState) => {
  //     console.log(prevState);
  //     const {gameQuestions} = this.props;
  //     const nextIndex = prevState.step + 1;
  //     const isEnd = nextIndex >= gameQuestions.length;

  //     return {
  //       question: !isEnd ? nextIndex : -1,
  //     };
  //   });
  // }
}

App.propTypes = {
  step: PropTypes.number.isRequired,
  mistakes: PropTypes.number.isRequired,
  onWelcomeScreenClick: PropTypes.func.isRequired,
  onUserAnswer: PropTypes.func.isRequired,
  gameTime: PropTypes.number.isRequired,
  gameMistakes: PropTypes.number.isRequired,
  gameQuestions: PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.exact({
          type: PropTypes.oneOf([`genre`]),
          genre: PropTypes.oneOf([`rock`, `jazz`]),
          answers: PropTypes.arrayOf(
              PropTypes.exact({
                id: PropTypes.string.isRequired,
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
                id: PropTypes.string.isRequired,
                picture: PropTypes.string.isRequired,
                artist: PropTypes.string.isRequired,
              })
          ),
        }),
      ])
  ).isRequired,
};

const mapStateToProps = (state, ownProps) =>
  Object.assign({}, ownProps, {step: state.step, mistakes: state.mistakes});

const mapDispatchToProps = (dispatch) => ({
  onWelcomeScreenClick: () => dispatch(ActionCreator.incrementStep()),

  onUserAnswer: (userAnswer, question, mistakes, maxMistakes) => {
    dispatch(ActionCreator.incrementStep());
    dispatch(
        ActionCreator.incrementMistake(
            userAnswer,
            question,
            mistakes,
            maxMistakes
        )
    );
  },
});

export {App};

export default connect(mapStateToProps, mapDispatchToProps)(App);
