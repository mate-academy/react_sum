import React from 'react';
import PropTypes from 'prop-types';

function Sum({ num1, num2 }) {
  return (
    <p>
      {`Sum of ${num1} and ${num2} is ${num1 + num2}`}
    </p>
  );
}

Sum.defaultProps = {
  num1: 1,
  num2: 2,
};

Sum.propTypes = {
  num1: PropTypes.number,
  num2: PropTypes.number,
};

export default Sum;
