import React from "react";
import renderer from "react-test-renderer";
import {App} from "./app";

it(`Компонент app рендерится`, () => {
  const tree = renderer
    .create(<App mistakes={0} gameTime={0} startGameHandler={jest.fn()} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
