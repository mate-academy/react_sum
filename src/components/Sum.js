import React from 'react';
import PropTypes from 'prop-types';

function Sum({ firstElement, secondElement }) {
  return (
    <p>
      Sum of
      {` ${firstElement} `}
      and
      {` ${firstElement} `}
      is
      {` ${firstElement + secondElement}`}
    </p>
  );
}

Sum.propTypes = {
  firstElement: PropTypes.number.isRequired,
  secondElement: PropTypes.number.isRequired,
};

export default Sum;
