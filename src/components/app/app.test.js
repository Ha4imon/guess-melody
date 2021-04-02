import React from "react";
import renderer from "react-test-renderer";
import {App} from "./app";

it(`Компонент app рендерится`, () => {
  const questions = [
    {
      type: `genre`,
      genre: `rock`,
      answers: [],
    },
    {
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
    },
  ];

  const tree = renderer
    .create(
        <App
          gameMistakes={0}
          gameTime={0}
          gameQuestions={questions}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
