import PropTypes from 'prop-types';
import React from 'react';

export function Sum(props) {
  return (
    <p>
      {`Sum of ${props.a} and ${props.b} is ${props.a + props.b}`}
    </p>
  );
}

Sum.defaultProps = {
  a: 0,
  b: 0,
};

Sum.propsTypes = {
  a: PropTypes.number,
  b: PropTypes.number,
};
