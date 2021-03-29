import React from "react";
import renderer from "react-test-renderer";
import {App} from "./app";

it(`Компонент app рендерится`, () => {
  const tree = renderer
    .create(
        <App
          gameMistakes={0}
          gameTime={0}
          gameQuestions={[]}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
