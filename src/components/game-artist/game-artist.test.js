import React from "react";
import renderer from "react-test-renderer";
import {GameArtist} from "./game-artist";

it(`Компонент game-artist рендерится`, () => {
  const question = {
    type: `artist`,
    song: {
      artist: ``,
      src: ``,
    },
    answers: [],
  };
  const tree = renderer.create(
      <GameArtist question={question} onAnswer={jest.fn()} />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
