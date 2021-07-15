import React from 'react';
import PropTypes from 'prop-types';
import './Sum.css';

const Sum = ({ firstNum, secondNum }) => (
  <div className="sum">
    {`Sum of ${firstNum} and ${secondNum} is ${firstNum + secondNum}`}
  </div>
);

Sum.defaultProps = {
  firstNum: 0,
  secondNum: 0,
};

Sum.propTypes = {
  firstNum: PropTypes.number,
  secondNum: PropTypes.number,
};

export default Sum;
