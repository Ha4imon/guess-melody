import React from "react";
import PropTypes from "prop-types";

const Mistakes = (props) => {
  const {count} = props;

  const mistakes = new Array(count).fill(``);

  return (
    <div className="game__mistakes">
      {mistakes.map((it, i) => (
        <div key={`mistake-${i}`} className="wrong" />
      ))}
      {/* <div className="wrong"></div> */}
      {/* <div className="wrong"></div> */}
    </div>
  );
};

Mistakes.propTypes = {
  count: PropTypes.number.isRequired,
};

export {Mistakes};
