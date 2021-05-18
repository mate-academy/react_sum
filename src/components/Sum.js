import PropTypes from 'prop-types';
import React from 'react';

function Sum({ firstNumber: firstNum, secondNumber: secondNum }) {
  return (
    <p>
      {`Sum of ${firstNum} and ${secondNum} is ${firstNum + secondNum}`}
    </p>
  );
}

Sum.defaultProps = {
  firstNumber: 0,
  secondNumber: 0,
};

Sum.propTypes = {
  firstNumber: PropTypes.number,
  secondNumber: PropTypes.number,
};

export default Sum;
