import React from 'react';
import PropTypes from 'prop-types';

function Sum({
  firstValue = 0,
  secondValue = 0,
}) {
  return (
    <p>
      {`Sum of ${firstValue} and ${secondValue}`
      + ` is ${firstValue + secondValue}`}
    </p>
  );
}

Sum.propTypes = {
  firstValue: PropTypes.number.isRequired,
  secondValue: PropTypes.number.isRequired,
};

export default Sum;
