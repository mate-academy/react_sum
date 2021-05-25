import React from 'react';
import PropTypes from 'prop-types';

const Sum = ({ firstElement, secondElement }) => (
  <div>
    Result -
    {' '}
    {firstElement + secondElement}
  </div>
);

Sum.propTypes = {
  firstElement: PropTypes.number.isRequired,
  secondElement: PropTypes.number.isRequired,
};

export default Sum;
