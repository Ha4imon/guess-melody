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
      answers: [
        {
          id: `id-genre1`,
          src: `audio/sovet-russia.oga`,
          genre: `rock`,
        },
        {
          id: `id-genre2`,
          src: `audio/sovet-russia.oga`,
          genre: `jazz`,
        },
        {
          id: `id-genre3`,
          src: `audio/sovet-russia.oga`,
          genre: `pop`,
        },
        {
          id: `id-genre4`,
          src: `audio/sovet-russia.oga`,
          genre: `rock`,
        },
      ],
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
          artist: `John Snow`
        },
        {
          id: `id-artist2`,
          picture: `http://placehold.it/134x134`,
          artist: `Jack Snow`
        },
        {
          id: `id-artist3`,
          picture: `http://placehold.it/134x134`,
          artist: `Джек`
        },
      ]
    }
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
