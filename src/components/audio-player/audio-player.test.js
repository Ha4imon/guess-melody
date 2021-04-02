import React from "react";
import renderer from "react-test-renderer";
import {AudioPlayer} from "./audio-player";

function createNodeMock(element) {
  if (element.type === `audio`) {
    // This is your fake DOM node for <p>.
    // Feel free to add any stub methods, e.g. focus() or any
    // other methods necessary to prevent crashes in your components.
    return {
      src: ``
    };
  }
  // You can return any object from this method for any type of DOM component.
  // React will use it as a ref instead of a DOM node when snapshot testing.
  return null;
}

it(`Компонент AudioPlayer рендерится`, () => {
  const options = {createNodeMock};
  const tree = renderer
    .create(
        <AudioPlayer
          src={``}
          isPlaying={false}
          onButtonClick={jest.fn()}
        />, options
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
