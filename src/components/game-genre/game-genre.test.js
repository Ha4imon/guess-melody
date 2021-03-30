import React from "react";
import renderer from "react-test-renderer";
import {GameGenre} from "./game-genre";

it(`Компонент game-genre рендерится`, () => {
  const question = {
    type: `genre`,
    genre: `rock`,
    answers: [],
  };
  const tree = renderer.create(
      <GameGenre question={question} onAnswer={jest.fn()} />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
