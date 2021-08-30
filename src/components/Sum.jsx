import React from 'react';
import PropTypes from 'prop-types';

function Sum({
  firstValue,
  secondValue,
}) {
  return (
    <p>
      {'Sum of '}
      {firstValue}
      {' and '}
      {secondValue}
      {' is '}
      {firstValue + secondValue}
    </p>
  );
}

Sum.defaultProps = {
  firstValue: 0,
  secondValue: 0,
};

Sum.propTypes = {
  firstValue: PropTypes.number,
  secondValue: PropTypes.number,
};

export default Sum;
