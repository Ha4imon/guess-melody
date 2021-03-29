import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {App} from "./app";

Enzyme.configure({adapter: new Adapter()});

it(`Кнопка начала игры запускает новую игру`, () => {
  const questions = [
    {
      type: `genre`,
      genre: `rock`,
      answers: [],
    },
    {
      type: `artist`,
      song: {
        artist: ``,
        src: ``,
      },
      answers: [],
    },
  ];

  const app = mount(
      <App gameMistakes={0} gameTime={0} gameQuestions={questions} />
  );

  const startButton = app.find(`.welcome__button`);

  startButton.simulate(`click`, {preventDefault() {}});
  expect(app.state().question).toEqual(0);

  startButton.simulate(`click`, {preventDefault() {}});
  expect(app.state().question).toEqual(1);
});
