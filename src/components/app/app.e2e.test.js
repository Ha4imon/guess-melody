import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {App} from './app';

Enzyme.configure({adapter: new Adapter()});

it(`Кнопка начала игры запускает новую игру`, () => {
  const clickHandler = jest.fn();
  const app = shallow(<App mistakes={0} gameTime={0} startGameHandler={clickHandler} />);

  const startButton = app.find(`.welcome__button`);
  startButton.simulate(`click`);

  expect(clickHandler).toHaveBeenCalledTimes(1);
});
