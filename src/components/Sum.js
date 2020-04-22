/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';

function Sum(props) {
  return (
    <p>
      Sum of {props.a} and {props.b} is {props.a + props.b}
    </p>
  );
}

Sum.propTypes = {
  a: PropTypes.number,
  b: PropTypes.number,
};

Sum.defaultProps = {
  a: 2,
  b: 3,
};

export default Sum;
