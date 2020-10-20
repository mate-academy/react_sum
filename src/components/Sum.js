import React from 'react';
import propTypes from 'prop-types';

function Sum(props) {
  return (
    <p>
      {`Sum of ${props.a} and ${props.b} is ${props.a + props.b}`}
    </p>
  );
}

Sum.propTypes = {
  a: propTypes.number.isRequired,
  b: propTypes.number.isRequired,
};

export default Sum;
