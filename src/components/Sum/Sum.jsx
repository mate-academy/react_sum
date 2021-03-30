import React from 'react';
import PropTypes from 'prop-types';
import './sum.scss';

const Sum = ({
  firstNumber,
  seconNumber,
}) => (
  <div className="section">
    {`Sum of ${firstNumber} and ${seconNumber} = `}
    {<span className="borderBotoom">{firstNumber + seconNumber}</span>}
  </div>
);

Sum.propTypes = {
  firstNumber: PropTypes.number.isRequired,
  seconNumber: PropTypes.number.isRequired,
};

export default Sum;
