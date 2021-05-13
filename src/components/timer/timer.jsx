import React from "react";
import PropTypes from 'prop-types';

const Timer = (props) => {
  const {time} = props;

  const getNumberWithZero = (number) => {
    return number >= 10 ? number : `0${number}`;
  };

  return (
    <div className="timer__value" xmlns="http://www.w3.org/1999/xhtml">
      <span className="timer__mins">{getNumberWithZero(Math.trunc(time / 60 % 60))}</span>
      <span className="timer__dots">:</span>
      <span className="timer__secs">{getNumberWithZero(time % 60)}</span>
    </div>
  );
};

Timer.propTypes = {
  time: PropTypes.number.isRequired,
};

export {Timer};
