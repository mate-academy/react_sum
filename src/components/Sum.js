import React from 'react';
import PropTypes from 'prop-types';

function Sum(props) {
  return (
    <p>
      {`Sum of ${props.a} and ${props.b} is ${props.a + props.b}`}
    </p>
  );
}

Sum.defaultProps = {
  a: 0,
  b: 0,
};

Sum.propTypes = {
  a: PropTypes.number,
  b: PropTypes.number,
};

export default Sum;
