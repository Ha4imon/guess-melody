import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {WelcomeScreen} from "../welcome-screen/welcome-screen.jsx";

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {gameTime, gameMistakes, startGameHandler, gameQuestions} = this.props;

    return (
      <WelcomeScreen
        time={gameTime}
        mistakes={gameMistakes}
        startGameHandler={startGameHandler}
        questions={gameQuestions}
      />
    );
  }
}

App.propTypes = {
  gameTime: PropTypes.number.isRequired,
  gameMistakes: PropTypes.number.isRequired,
  startGameHandler: PropTypes.func.isRequired,
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
          )
        }),
        PropTypes.exact({
          type: PropTypes.oneOf([`artist`]),
          song: PropTypes.exact({
            artist: PropTypes.string.isRequired,
            src: PropTypes.string.isRequired
          }),
          answers: PropTypes.arrayOf(
              PropTypes.exact({
                picture: PropTypes.string.isRequired,
                artist: PropTypes.string.isRequired,
              })
          )
        })
      ])
  ).isRequired
};

export {App};
