import React, {PureComponent} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";

import {ActionCreator} from "../../reducer";
import {WelcomeScreen} from "../welcome-screen/welcome-screen.jsx";
import {GameGenre} from "../game-genre/game-genre.jsx";
import {GameArtist} from "../game-artist/game-artist.jsx";
import {Mistakes} from "../mistakes/mistakes.jsx";
import {Timer} from "../timer/timer.jsx";

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      time: 5 * 60,
    };

    this._getScreen = this._getScreen.bind(this);
    this._startTimer = this._startTimer.bind(this);
  }

  render() {
    return this._getScreen(this.props);
  }

  _startTimer() {
    const {tickTimer} = this.props;
    let {time} = this.state;

    const defaultTime = time;

    const timerId = setInterval(() => {
      time = this.state.time;
      tickTimer(time);

      this.setState((prevState) => ({
        time: prevState.time - 1,
      }));

      if (time <= 0) {
        this.setState({
          time: defaultTime,
        });
        clearInterval(timerId);
      }
    }, 1000);
  }

  _getScreen(props) {
    const {
      step,
      onWelcomeScreenClick,
      onUserAnswer,
      mistakes,
      gameQuestions,
    } = props;

    const {time} = this.state;

    if (step === -1) {
      return (
        <WelcomeScreen
          key={step}
          time={time}
          mistakes={mistakes}
          onStartButtonClick={() => {
            onWelcomeScreenClick();
            this._startTimer();
          }}
        />
      );
    }

    const currentQuestion = gameQuestions[step];

    switch (currentQuestion.type) {
      case `genre`:
        return (
          <GameGenre
            key={step}
            question={gameQuestions[step]}
            onAnswer={(userAnswer, question) => {
              onUserAnswer(userAnswer, question, mistakes);
            }}
          >
            <Timer time={time} />
            <Mistakes count={mistakes} />
          </GameGenre>
        );
      case `artist`:
        return (
          <GameArtist
            key={step}
            question={gameQuestions[step]}
            onAnswer={(userAnswer, question) => {
              onUserAnswer(userAnswer, question, mistakes);
            }}
          >
            <Timer time={time} />
            <Mistakes count={mistakes} />
          </GameArtist>
        );
    }

    return null;
  }
}

App.propTypes = {
  step: PropTypes.number.isRequired,
  mistakes: PropTypes.number.isRequired,
  onWelcomeScreenClick: PropTypes.func.isRequired,
  tickTimer: PropTypes.func.isRequired,
  onUserAnswer: PropTypes.func.isRequired,
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
  Object.assign({}, ownProps, {
    step: state.step,
    mistakes: state.mistakes,
  });

const mapDispatchToProps = (dispatch) => ({
  onWelcomeScreenClick: () => {
    dispatch(ActionCreator.incrementStep());
  },

  tickTimer: (time) => {
    dispatch(ActionCreator.decrementTime(time));
  },

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
