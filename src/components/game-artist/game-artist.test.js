import React from "react";
import renderer from "react-test-renderer";
import {GameArtist} from "./game-artist";
import {createNodeMock} from "utils/test-utils.js";

it(`Компонент game-artist рендерится`, () => {
  const options = {createNodeMock};
  const question = {
    type: `artist`,
    song: {
      artist: `Jim Snow`,
      src: `audio/sovet-russia.oga`,
    },
    answers: [
      {
        id: `id-artist1`,
        picture: `http://placehold.it/134x134`,
        artist: `John Snow`,
      },
      {
        id: `id-artist2`,
        picture: `http://placehold.it/134x134`,
        artist: `Jack Snow`,
      },
      {
        id: `id-artist3`,
        picture: `http://placehold.it/134x134`,
        artist: `Джек`,
      },
    ],
  };
  const tree = renderer
    .create(<GameArtist question={question} onAnswer={jest.fn()} />, options)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
