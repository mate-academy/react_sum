import React from 'react';
import PropTypes from 'prop-types';

function Sum({ firstValue, secondValue }) {
  const sum = firstValue + secondValue;

  return (
    <p>
      {`Sum of ${firstValue} and ${secondValue} is ${sum}`}
    </p>
  );
}

Sum.propTypes = {
  firstValue: PropTypes.number.isRequired,
  secondValue: PropTypes.number.isRequired,
};

export default Sum;
