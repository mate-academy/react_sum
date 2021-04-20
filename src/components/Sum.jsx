import React from 'react';
import PropTypes from 'prop-types';

function Sum({ a, b }) {
  return (
    <div>
      {`${a} + ${b} = ${a + b}`}
    </div>
  );
}

Sum.defaultProps = {
  b: 0,
  a: 0,
};

Sum.propTypes = {
  a: PropTypes.number,
  b: PropTypes.number,
};

export default Sum;
