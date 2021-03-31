import React from 'react';
import PropTypes from 'prop-types';
import './sum.scss';

const Sum = ({
  firstNumber,
  secondNumber,
}) => (
  <div className="section">
    {`Sum of ${firstNumber} and ${secondNumber} = `}
    {<span className="borderBotoom">{firstNumber + secondNumber}</span>}
  </div>
);

Sum.propTypes = {
  firstNumber: PropTypes.number.isRequired,
  secondNumber: PropTypes.number.isRequired,
};

export default Sum;
