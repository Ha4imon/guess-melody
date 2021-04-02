import React from "react";
import ReactDOM from "react-dom";
import {App} from "./components/app/app.jsx";
import {gameSettings, questions} from "mocks/questions";

const init = () => {
  const {time: gameTime, mistakes: gameMistakes} = gameSettings;

  ReactDOM.render(
      <App
        gameTime={gameTime}
        gameMistakes={gameMistakes}
        gameQuestions={questions}
      />,
      document.querySelector(`#root`)
  );
};

init();
