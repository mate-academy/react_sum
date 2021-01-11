import React from 'react';
import PropTypes from 'prop-types';

function Sum({ a, b }) {
  const space = ' ';

  return (
    <p className="expression">
      Sum of
      {space}
      {a}
      {space}
      and
      {space}
      {b}
      {space}
      is
      {space}
      {a + b}
    </p>
  );
}

Sum.propTypes = {
  a: PropTypes.number.isRequired,
  b: PropTypes.number.isRequired,
};

export default Sum;
