import React from "react"
import PropTypes from "prop-types"

import "./Sum.scss"

export function Sum({x, y}) {
  return (
    <p className="sum">
      { 'Sum of ' }
      <span className="sum__number"> {x} </span>
      { ' and '}
      <span className="sum__number"> {y} </span>
      { ' is ' }
      <span className="sum__number"> {x + y} </span>
    </p>
  );
}

Sum.defaultProps = {
  x: 0,
  y: 0,
}

Sum.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
}
