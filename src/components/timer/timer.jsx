import React from "react";
import PropTypes from 'prop-types';

const Timer = (props) => {
  const {time} = props;

  return (
    <div className="timer__value" xmlns="http://www.w3.org/1999/xhtml">
      <span className="timer__mins">{time}</span>
      <span className="timer__dots">:</span>
      <span className="timer__secs">00</span>
    </div>
  );
};

Timer.PropTypes = {
  time: PropTypes.number.isRequired,
};

export {Timer};
